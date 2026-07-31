"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { 
  Users, 
  Handshake, 
  MessageSquare, 
  Target, 
  BookOpen, 
  LifeBuoy,
  LogOut,
  PlayCircle, 
  FolderOpen, 
  GraduationCap, 
  User
} from "lucide-react";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { cn } from "@/lib/utils";

const egregoraNavigation = [
  { name: "Jornada Acadêmica", href: "/egregora/jornada", icon: BookOpen },
  { name: "Rodas de Conversa", href: "/egregora/rodas", icon: MessageSquare },
  { name: "Parcerias", href: "/egregora/parcerias", icon: Handshake },
  { name: "Missão da Pesquisa", href: "/egregora/missao", icon: Target },
  { name: "SOS Situações Delicadas", href: "/egregora/sos", icon: LifeBuoy },
];

const alunoNavigation = [
  { name: "Meus Cursos e Aulas", href: "/aluno", icon: PlayCircle },
  { name: "Materiais", href: "/aluno/materiais", icon: FolderOpen },
  { name: "Certificados", href: "/aluno/certificados", icon: GraduationCap },
  { name: "Minha Conta", href: "/aluno/conta", icon: User },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { userProfile } = useAuth();
  
  const isMentorada = userProfile?.role === "mentorada" || userProfile?.role === "admin";

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  const renderNavGroup = (items: typeof egregoraNavigation) => {
    return (
      <ul role="list" className="-mx-2 space-y-2">
        {items.map((item) => {
          const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== "/aluno" && item.href !== "/aluno/conta");
          // Exact match for /aluno because /aluno/materiais would otherwise match
          const isExactActive = item.href === "/aluno" ? pathname === "/aluno" : isActive;
          
          return (
            <li key={item.name}>
              <Link
                href={item.href}
                className={cn(
                  "group flex gap-x-3 rounded-md p-2 text-sm leading-6 transition-colors",
                  item.name === "SOS Situações Delicadas"
                    ? isExactActive 
                      ? "bg-red-50 text-red-600 font-semibold"
                      : "text-red-500 hover:text-red-600 hover:bg-red-50/50"
                    : isExactActive
                      ? "bg-primary-soft text-primary font-semibold"
                      : "text-foreground/80 hover:text-primary hover:bg-primary-soft/50"
                )}
              >
                <item.icon
                  className={cn(
                    "h-6 w-6 shrink-0",
                    item.name === "SOS Situações Delicadas"
                      ? isExactActive ? "text-red-600" : "text-red-400 group-hover:text-red-600"
                      : isExactActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-primary/10 bg-background/50 backdrop-blur-md px-6 pb-4">
      <div className="flex h-20 shrink-0 items-center mt-4">
        <span className="font-serif font-bold text-2xl text-primary tracking-tight">FLUIR+</span>
      </div>
      <nav className="flex flex-1 flex-col justify-between">
        <div className="flex flex-1 flex-col gap-y-7">
          {isMentorada && (
            <div>
              <div className="text-xs font-semibold leading-6 text-muted-foreground uppercase tracking-wider mb-2">
                A Egrégora
              </div>
              {renderNavGroup(egregoraNavigation)}
            </div>
          )}
          
          <div>
            <div className={cn(
              "text-xs font-semibold leading-6 text-muted-foreground uppercase tracking-wider mb-2",
              isMentorada && "mt-4"
            )}>
              Área da Aluna
            </div>
            {renderNavGroup(alunoNavigation)}
          </div>
        </div>
        
        <div className="mt-auto pt-8">
          <button
            onClick={handleLogout}
            className="group flex w-full gap-x-3 rounded-md p-2 text-sm font-medium leading-6 text-foreground/80 hover:bg-red-50 hover:text-red-600 transition-colors"
          >
            <LogOut className="h-6 w-6 shrink-0 text-muted-foreground group-hover:text-red-600" aria-hidden="true" />
            Sair da Plataforma
          </button>
        </div>
      </nav>
    </div>
  );
}
