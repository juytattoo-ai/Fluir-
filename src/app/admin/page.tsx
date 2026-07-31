"use client";

import { useEffect, useState } from "react";
import { UserProfile, getAllUsers, updateUserRole, updateUserCourses } from "@/services/userService";
import { ShieldAlert, RefreshCw, CheckCircle2, GraduationCap } from "lucide-react";

export default function AdminPage() {
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const fetchUsers = async () => {
    setLoading(true);
    const data = await getAllUsers();
    // Sort so admins are on top, then mentorada, then aluno
    const sorted = data.sort((a, b) => {
      const order = { admin: 1, mentorada: 2, aluno: 3 };
      return order[a.role] - order[b.role];
    });
    setUsers(sorted);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleRoleChange = async (uid: string, newRole: "aluno" | "mentorada" | "admin") => {
    setUpdatingId(uid);
    const success = await updateUserRole(uid, newRole);
    if (success) {
      setUsers((prev) => 
        prev.map((u) => u.uid === uid ? { ...u, role: newRole } : u)
      );
    } else {
      alert("Erro ao atualizar o nível de acesso.");
    }
    setUpdatingId(null);
  };

  const handleCourseToggle = async (uid: string, currentCourses: string[] | undefined, courseId: string) => {
    setUpdatingId(uid);
    const isEnrolled = currentCourses?.includes(courseId);
    const success = await updateUserCourses(uid, courseId, !isEnrolled);
    
    if (success) {
      setUsers((prev) => 
        prev.map((u) => {
          if (u.uid === uid) {
            let updatedCourses = u.enrolledCourses || [];
            if (!isEnrolled) {
              updatedCourses = [...updatedCourses, courseId];
            } else {
              updatedCourses = updatedCourses.filter(id => id !== courseId);
            }
            return { ...u, enrolledCourses: updatedCourses };
          }
          return u;
        })
      );
    } else {
      alert("Erro ao atualizar o acesso ao curso.");
    }
    setUpdatingId(null);
  };

  const getRoleBadge = (role: string) => {
    switch (role) {
      case "admin":
        return <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10"><ShieldAlert className="h-3 w-3"/> Admin</span>;
      case "mentorada":
        return <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20"><CheckCircle2 className="h-3 w-3"/> Mentorada</span>;
      default:
        return <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Aluna</span>;
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-bold text-foreground">Gestão de Alunas</h1>
        <p className="mt-2 text-muted-foreground">
          Gerencie o nível de acesso e os cursos liberados para cada pessoa na plataforma.
        </p>
      </div>

      <div className="glass-card overflow-hidden">
        <div className="p-4 sm:p-6 border-b border-primary/10 flex justify-between items-center bg-primary-soft/30">
          <h3 className="font-semibold text-lg text-foreground">Base de Usuários</h3>
          <button 
            onClick={fetchUsers}
            className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
          >
            <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
            Atualizar Lista
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-primary/10">
            <thead className="bg-white/50">
              <tr>
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-foreground sm:pl-6">
                  Usuária
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-foreground">
                  Status
                </th>
                <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-foreground">
                  Acessos
                </th>
                <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-foreground sm:pr-6">
                  Permissão Geral
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/5 bg-transparent">
              {loading && users.length === 0 ? (
                <tr>
                  <td colSpan={4} className="py-10 text-center text-muted-foreground text-sm">
                    Carregando usuárias...
                  </td>
                </tr>
              ) : users.length === 0 ? (
                <tr>
                  <td colSpan={4} className="py-10 text-center text-muted-foreground text-sm">
                    Nenhuma usuária encontrada.
                  </td>
                </tr>
              ) : (
                users.map((person) => (
                  <tr key={person.uid} className="hover:bg-primary-soft/20 transition-colors">
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                      <div className="flex items-center gap-3">
                        {person.photoURL ? (
                          <img className="h-10 w-10 rounded-full object-cover border border-primary/20" src={person.photoURL} alt="" />
                        ) : (
                          <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                            {person.displayName?.charAt(0) || person.email?.charAt(0) || "U"}
                          </div>
                        )}
                        <div>
                          <div className="font-medium text-foreground">{person.displayName || "Sem Nome"}</div>
                          <div className="text-muted-foreground text-xs">{person.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">
                      {getRoleBadge(person.role)}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-center">
                      <label className="inline-flex items-center gap-2 cursor-pointer opacity-90 hover:opacity-100 transition-opacity">
                        <input
                          type="checkbox"
                          className="w-4 h-4 rounded text-primary focus:ring-primary border-gray-300 disabled:opacity-50"
                          checked={person.enrolledCourses?.includes("mestrado") || false}
                          disabled={updatingId === person.uid}
                          onChange={() => handleCourseToggle(person.uid, person.enrolledCourses, "mestrado")}
                        />
                        <span className="text-xs font-medium text-foreground flex items-center gap-1">
                          <GraduationCap className="h-3 w-3" />
                          Mestrado
                        </span>
                      </label>
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                      <select
                        value={person.role}
                        disabled={updatingId === person.uid}
                        onChange={(e) => handleRoleChange(person.uid, e.target.value as any)}
                        className="rounded-md border-0 py-1.5 pl-3 pr-8 text-foreground shadow-sm ring-1 ring-inset ring-foreground/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-white cursor-pointer disabled:opacity-50"
                      >
                        <option value="aluno">Apenas Aluna</option>
                        <option value="mentorada">Mentorada (Egrégora)</option>
                        <option value="admin">Administradora</option>
                      </select>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
