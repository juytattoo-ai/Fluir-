"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Users, 
  Handshake, 
  MessageSquare, 
  Target, 
  BookOpen, 
  LifeBuoy,
  LogOut,
  Leaf,
  Library
} from "lucide-react";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Comunidade", href: "/egregora", icon: Users },
  { name: "Parcerias", href: "/egregora/parcerias", icon: Handshake },
  { name: "Rodas de Conversa", href: "/egregora/rodas", icon: MessageSquare },
  { name: "Missão da Pesquisa", href: "/egregora/missao", icon: Target },
  { name: "Jornada Acadêmica", href: "/egregora/jornada", icon: BookOpen },
  { name: "SOS Situações Delicadas", href: "/egregora/sos", icon: LifeBuoy },
];

export default function Sidebar() {
  const pathname = usePathname();

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-primary/10 bg-background/50 backdrop-blur-md px-6 pb-4">
      <div className="flex h-20 shrink-0 items-center mt-4">
        <Leaf className="h-10 w-10 text-primary" strokeWidth={1.5} />
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
                        isActive
                          ? "bg-primary-soft text-primary font-semibold"
                          : "text-foreground/80 hover:text-primary hover:bg-primary-soft/50",
                        "group flex gap-x-3 rounded-md p-2 text-sm leading-6 transition-colors"
                      )}
                    >
                      <item.icon
                        className={cn(
                          isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary",
                          "h-6 w-6 shrink-0"
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
        </ul>
        
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
