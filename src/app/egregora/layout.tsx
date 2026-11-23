import ProtectedRoute from "@/components/auth/ProtectedRoute";
import Sidebar from "@/components/layout/Sidebar";
import FeedAtualizacoes from "@/components/layout/FeedAtualizacoes";

export const metadata = {
  title: "Egrégora | FLUIR+",
};

export default function EgregoraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute allowedRoles={["mentorada", "admin"]}>
      <div className="flex min-h-[calc(100vh-126px)] overflow-hidden bg-transparent">
        <div className="hidden lg:flex lg:w-72 lg:flex-col">
          <Sidebar />
        </div>
        <div className="flex flex-1 flex-col overflow-y-auto">
          <main className="flex-1 p-6 lg:p-8 pt-16 lg:pt-24 h-full">
            {children}
          </main>
        </div>
        
        {/* Right Sidebar: Feed de Atualizações */}
        <div className="hidden xl:flex xl:w-80 xl:flex-col">
          <FeedAtualizacoes />
        </div>
      </div>
    </ProtectedRoute>
  );
}
