"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: ("aluno" | "mentorada" | "admin")[];
}

export default function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const { user, userProfile, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push("/login");
      } else if (allowedRoles && userProfile?.role && !allowedRoles.includes(userProfile.role)) {
        // Se estiver logado mas não tiver a permissão correta
        router.push(userProfile.role === "aluno" ? "/aluno" : "/");
      }
    }
  }, [user, userProfile, loading, router, allowedRoles]);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <p className="text-sm text-primary font-medium">Carregando perfil...</p>
        </div>
      </div>
    );
  }

  // Prevent rendering if not authenticated or not authorized
  if (!user || (allowedRoles && userProfile?.role && !allowedRoles.includes(userProfile.role))) {
    return null;
  }

  return <>{children}</>;
}
