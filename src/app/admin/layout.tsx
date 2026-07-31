import ProtectedRoute from "@/components/auth/ProtectedRoute";
import AdminSidebar from "./Sidebar";

export const metadata = {
  title: "Administração | FLUIR+",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute allowedRoles={["admin"]}>
      <div className="flex h-[calc(100vh-64px)] overflow-hidden bg-zinc-50/50">
        <div className="hidden lg:flex lg:w-72 lg:flex-col">
          <AdminSidebar />
        </div>
        
        <main className="flex-1 overflow-y-auto">
          <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
