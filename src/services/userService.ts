import { doc, getDoc, setDoc, serverTimestamp, collection, getDocs, updateDoc } from "firebase/firestore";
import { User } from "firebase/auth";
import { db } from "@/lib/firebase";

export interface UserProfile {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  role: "aluno" | "mentorada" | "admin";
  enrolledCourses?: string[];
  academicGoal?: string;
  createdAt: any;
}

/**
 * Creates or updates a user profile in Firestore after authentication.
 * Defaults new users to the 'aluno' role.
 */
export async function createUserProfileDocument(user: User, additionalData?: any): Promise<UserProfile | null> {
  if (!user) return null;

  const userRef = doc(db, "users", user.uid);
  const snapshot = await getDoc(userRef);

  if (!snapshot.exists()) {
    const { email, displayName, photoURL } = user;
    const createdAt = serverTimestamp();

    try {
      await setDoc(userRef, {
        uid: user.uid,
        email,
        displayName,
        photoURL,
        role: "aluno", // Default role
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error("Error creating user profile", error);
    }
  }

  return getUserProfile(user.uid);
}

/**
 * Fetches the user profile from Firestore by UID.
 */
export async function getUserProfile(uid: string): Promise<UserProfile | null> {
  if (!uid) return null;

  try {
    const userRef = doc(db, "users", uid);
    const snapshot = await getDoc(userRef);

    if (snapshot.exists()) {
      return snapshot.data() as UserProfile;
    }
  } catch (error) {
    console.error("Error fetching user profile", error);
  }

  return null;
}

/**
 * Fetches all users from the Firestore (Admin only)
 */
export async function getAllUsers(): Promise<UserProfile[]> {
  const users: UserProfile[] = [];
  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      users.push(doc.data() as UserProfile);
    });
  } catch (error) {
    console.error("Error fetching all users", error);
  }
  return users;
}

/**
 * Updates a specific user's role (Admin only)
 */
export async function updateUserRole(uid: string, newRole: "aluno" | "mentorada" | "admin"): Promise<boolean> {
  try {
    const userRef = doc(db, "users", uid);
    await updateDoc(userRef, {
      role: newRole
    });
    return true;
  } catch (error) {
    console.error("Error updating user role", error);
    return false;
  }
}

/**
 * Updates a specific user's enrolled courses (Admin only)
 */
export async function updateUserCourses(uid: string, courseId: string, isEnrolled: boolean): Promise<boolean> {
  try {
    const userRef = doc(db, "users", uid);
    const snapshot = await getDoc(userRef);
    if (!snapshot.exists()) return false;
    
    const data = snapshot.data();
    let currentCourses = data.enrolledCourses || [];
    
    if (isEnrolled) {
      if (!currentCourses.includes(courseId)) {
        currentCourses.push(courseId);
      }
    } else {
      currentCourses = currentCourses.filter((id: string) => id !== courseId);
    }
    
    await updateDoc(userRef, {
      enrolledCourses: currentCourses
    });
    return true;
  } catch (error) {
    console.error("Error updating user courses", error);
    return false;
  }
}

/**
 * Updates a specific user's basic profile data (Name, Academic Goal, etc)
 */
export async function updateUserProfileData(uid: string, data: { displayName?: string; academicGoal?: string; photoURL?: string }): Promise<boolean> {
  try {
    const userRef = doc(db, "users", uid);
    await updateDoc(userRef, data);
    return true;
  } catch (error) {
    console.error("Error updating user profile data", error);
    return false;
  }
}

/**
 * Uploads a profile picture to Firebase Storage and returns the download URL
 */
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/lib/firebase";

export async function uploadProfilePicture(uid: string, file: File): Promise<string | null> {
  try {
    const fileExtension = file.name.split('.').pop();
    const storageRef = ref(storage, `avatars/${uid}.${fileExtension}`);
    
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    
    // Also update the firestore document with the new photoURL
    await updateUserProfileData(uid, { photoURL: downloadURL });
    
    return downloadURL;
  } catch (error) {
    console.error("Error uploading profile picture", error);
    return null;
  }
}
