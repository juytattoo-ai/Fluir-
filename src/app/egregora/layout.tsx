import ProtectedRoute from "@/components/auth/ProtectedRoute";
import Sidebar from "@/components/layout/Sidebar";

export const metadata = {
  title: "Egrégora | FLUIR+",
};

export default function EgregoraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <div className="flex h-[calc(100vh-64px)] overflow-hidden bg-zinc-50/50">
        <div className="hidden lg:flex lg:w-72 lg:flex-col">
          <Sidebar />
        </div>
        <div className="flex flex-1 flex-col overflow-y-auto">
          <main className="flex-1 p-6 lg:p-8">
            {children}
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
