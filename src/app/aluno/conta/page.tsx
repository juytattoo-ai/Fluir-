"use client";

import { useState, useRef, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { updateUserProfileData, uploadProfilePicture } from "@/services/userService";
import { Camera, Mail, ShieldCheck, User as UserIcon, GraduationCap, Loader2, CheckCircle2 } from "lucide-react";
import { updateProfile, deleteUser } from "firebase/auth";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function MinhaContaPage() {
  const { user, userProfile } = useAuth();
  
  const [displayName, setDisplayName] = useState("");
  const [academicGoal, setAcademicGoal] = useState("");
  const [photoURL, setPhotoURL] = useState<string | null>(null);
  
  const [isSaving, setIsSaving] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (userProfile) {
      setDisplayName(userProfile.displayName || "");
      setAcademicGoal(userProfile.academicGoal || "");
      setPhotoURL(userProfile.photoURL || null);
    }
  }, [userProfile]);

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userProfile) return;
    
    setIsSaving(true);
    setSuccessMessage("");
    
    const success = await updateUserProfileData(userProfile.uid, {
      displayName,
      academicGoal
    });
    
    if (success) {
      // Also update the auth user's display name
      if (user) {
        try {
          await updateProfile(user, { displayName });
        } catch (error) {
          console.error("Failed to update auth profile", error);
        }
      }
      setSuccessMessage("Perfil atualizado com sucesso!");
      setTimeout(() => setSuccessMessage(""), 3000);
    } else {
      alert("Erro ao salvar as informações. Tente novamente.");
    }
    
    setIsSaving(false);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !userProfile) return;
    
    // Check file type and size (max 5MB)
    if (!file.type.startsWith('image/')) {
      alert("Por favor, selecione apenas arquivos de imagem.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert("A imagem deve ter no máximo 5MB.");
      return;
    }

    setIsUploading(true);
    
    try {
      const newPhotoURL = await uploadProfilePicture(userProfile.uid, file);
      if (newPhotoURL) {
        setPhotoURL(newPhotoURL);
        // Update auth user
        if (user) {
          try {
            await updateProfile(user, { photoURL: newPhotoURL });
          } catch (error) {
            console.error("Failed to update auth photo", error);
          }
        }
        setSuccessMessage("Foto de perfil atualizada!");
        setTimeout(() => setSuccessMessage(""), 3000);
      } else {
        alert("Erro ao fazer upload. Verifique se o 'Storage' está ativado no seu painel do Firebase.");
      }
    } catch (error) {
      console.error(error);
      alert("Ocorreu um erro ao enviar a imagem.");
    } finally {
      setIsUploading(false);
      // Reset input so they can try again
      if (e.target) e.target.value = '';
    }
  };

  const handleDeleteAccount = async () => {
    if (!user || !userProfile) return;
    
    const confirm = window.confirm("Tem certeza que deseja EXCLUIR permanentemente sua conta? Esta ação não pode ser desfeita.");
    if (!confirm) return;
    
    setIsDeleting(true);
    
    try {
      // 1. Apagar o perfil do Firestore
      await deleteDoc(doc(db, "users", userProfile.uid));
      
      // 2. Apagar a conta de Autenticação
      await deleteUser(user);
      
      alert("Conta excluída com sucesso.");
      // O signOut e redirecionamento vão acontecer automaticamente pelo AuthContext
    } catch (error: any) {
      console.error("Erro ao excluir conta:", error);
      if (error.code === "auth/requires-recent-login") {
        alert("Por motivos de segurança, você precisa fazer o Login novamente antes de excluir sua conta. Saia e entre de novo.");
      } else {
        alert("Ocorreu um erro ao excluir sua conta. Tente novamente.");
      }
    } finally {
      setIsDeleting(false);
    }
  };

  const getRoleBadge = (role?: string) => {
    switch (role) {
      case "admin":
        return <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-3 py-1 text-sm font-medium text-red-700 ring-1 ring-inset ring-red-600/10">Administradora</span>;
      case "mentorada":
        return <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">Mentorada da Egrégora</span>;
      default:
        return <span className="inline-flex items-center gap-1 rounded-full bg-gray-50 px-3 py-1 text-sm font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Aluna</span>;
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-bold text-foreground">Minha Conta</h1>
        <p className="mt-2 text-muted-foreground">
          Gerencie suas informações pessoais e perfil acadêmico.
        </p>
      </div>

      <div className="glass-card overflow-hidden">
        {/* Profile Header Background */}
        <div className="h-32 bg-gradient-to-r from-primary/20 to-primary-soft/50 w-full relative"></div>
        
        <div className="px-6 sm:px-10 pb-10">
          {/* Avatar Section */}
          <div className="relative -mt-16 mb-8 flex justify-between items-end">
            <div className="relative group">
              <div className="h-32 w-32 rounded-full overflow-hidden border-4 border-background bg-white shadow-lg">
                {isUploading ? (
                  <div className="h-full w-full flex items-center justify-center bg-gray-50">
                    <Loader2 className="h-8 w-8 text-primary animate-spin" />
                  </div>
                ) : photoURL ? (
                  <img src={photoURL} alt="Foto de Perfil" className="h-full w-full object-cover" />
                ) : (
                  <div className="h-full w-full bg-primary/10 flex items-center justify-center text-primary font-serif text-4xl">
                    {displayName.charAt(0) || userProfile?.email?.charAt(0) || "U"}
                  </div>
                )}
              </div>
              
              <button 
                onClick={() => fileInputRef.current?.click()}
                disabled={isUploading}
                className="absolute bottom-0 right-0 p-2 bg-primary text-primary-foreground rounded-full shadow-md hover:bg-primary/90 transition-transform hover:scale-105 disabled:opacity-50"
                title="Alterar foto"
              >
                <Camera className="h-4 w-4" />
              </button>
              <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>
            
            <div className="mb-2">
              {getRoleBadge(userProfile?.role)}
            </div>
          </div>

          {/* Edit Form */}
          <form onSubmit={handleSaveProfile} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <UserIcon className="h-4 w-4 text-primary" />
                  Nome de Exibição
                </label>
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="Seu nome completo"
                  className="w-full rounded-lg border-primary/20 bg-white/50 px-4 py-2.5 text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  E-mail <span className="text-xs font-normal text-muted-foreground">(Não alterável)</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={userProfile?.email || ""}
                    disabled
                    className="w-full rounded-lg border-gray-200 bg-gray-50/50 px-4 py-2.5 text-gray-500 cursor-not-allowed"
                  />
                  <ShieldCheck className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-primary/10">
              <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-primary" />
                Objetivo Acadêmico ou Tema de Pesquisa
              </label>
              <p className="text-xs text-muted-foreground mb-2">
                Ex: Mestrado em Educação, Pesquisa sobre Mulheres na Ciência, Doutorado em Psicologia...
              </p>
              <input
                type="text"
                value={academicGoal}
                onChange={(e) => setAcademicGoal(e.target.value)}
                placeholder="Qual o seu foco acadêmico atual?"
                className="w-full rounded-lg border-primary/20 bg-white/50 px-4 py-2.5 text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>

            <div className="pt-6 flex items-center justify-end gap-4">
              {successMessage && (
                <span className="text-sm font-medium text-green-600 flex items-center gap-1 animate-in fade-in slide-in-from-right-4">
                  <CheckCircle2 className="h-4 w-4" />
                  {successMessage}
                </span>
              )}
              <button
                type="submit"
                disabled={isSaving}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 transition-all"
              >
                {isSaving ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Salvando...
                  </>
                ) : (
                  "Salvar Alterações"
                )}
              </button>
            </div>
          </form>
          
          {/* Danger Zone */}
          <div className="mt-12 pt-8 border-t border-red-100">
            <h3 className="text-lg font-semibold text-red-600 mb-2">Zona de Perigo (LGPD)</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Ao excluir sua conta, seu perfil, foto e informações de acesso serão permanentemente apagados do sistema. Suas mensagens na Egrégora serão mantidas anonimamente para não quebrar o contexto da discussão.
            </p>
            <button
              onClick={handleDeleteAccount}
              disabled={isDeleting}
              className="inline-flex items-center gap-2 rounded-lg bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-100 focus:ring-2 focus:ring-red-500 disabled:opacity-50 transition-colors"
            >
              {isDeleting ? "Excluindo..." : "Excluir Minha Conta Permanentemente"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
