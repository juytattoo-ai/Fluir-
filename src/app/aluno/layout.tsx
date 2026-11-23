import ProtectedRoute from "@/components/auth/ProtectedRoute";
import Sidebar from "@/components/layout/Sidebar";
import FeedAtualizacoes from "@/components/layout/FeedAtualizacoes";
import { Menu } from "lucide-react";

export const metadata = {
  title: "Área do Aluno | FLUIR+",
};

export default function AlunoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute allowedRoles={["aluno", "mentorada", "admin"]}>
      <div className="flex min-h-[calc(100vh-126px)] bg-zinc-50/50">
        <div className="hidden lg:flex lg:w-72 lg:flex-col">
          <Sidebar />
        </div>
        
        {/* Mobile sidebar placeholder - could use a sheet/drawer component here if needed later */}
        <div className="lg:hidden absolute top-4 left-4 z-10">
          {/* Menu icon placeholder for mobile */}
        </div>

        <main className="flex-1 overflow-y-auto">
          <div className="pt-20 pb-8 lg:pt-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto h-full">
            {children}
          </div>
        </main>
        
        {/* Right Sidebar: Feed de Atualizações */}
        <div className="hidden xl:flex xl:w-80 xl:flex-col">
          <FeedAtualizacoes />
        </div>
      </div>
    </ProtectedRoute>
  );
}
