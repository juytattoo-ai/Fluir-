"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  PlayCircle, 
  FolderOpen, 
  GraduationCap, 
  User,
  LogOut
} from "lucide-react";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

const navigation = [
  { name: "Meus Cursos", href: "/aluno", icon: PlayCircle },
  { name: "Materiais", href: "/aluno/materiais", icon: FolderOpen },
  { name: "Certificados", href: "/aluno/certificados", icon: GraduationCap },
  { name: "Minha Conta", href: "/aluno/conta", icon: User },
];

export default function AlunoSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-primary/10 bg-background/50 backdrop-blur-md px-6 pb-4">
      <div className="flex h-20 shrink-0 items-center mt-4">
        <span className="font-serif font-bold text-2xl text-primary tracking-tight">FLUIR+</span>
      </div>
      <nav className="flex flex-1 flex-col justify-between">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        "group flex gap-x-3 rounded-md p-2 text-sm leading-6 transition-colors",
                        isActive
                          ? "bg-primary-soft text-primary font-semibold"
                          : "text-foreground/80 hover:text-primary hover:bg-primary-soft/50"
                      )}
                    >
                      <item.icon
                        className={cn(
                          "h-6 w-6 shrink-0",
                          isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
          
          <li className="-mx-2 mt-auto">
            <button
              onClick={handleLogout}
              className="group flex w-full gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-foreground/80 hover:bg-red-50 hover:text-red-600 transition-colors"
            >
              <LogOut
                className="h-6 w-6 shrink-0 text-muted-foreground group-hover:text-red-600"
                aria-hidden="true"
              />
              Sair
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
