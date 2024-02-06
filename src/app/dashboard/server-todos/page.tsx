// Next guarda en cache el contenido de la página que está mostrando y si navegas y vuelves no se construye nuevamente. Con estas configuraciones a continuación, si el contenido cambia ahora se construye nuevamente la pagina si salgo y vuelvo.
export const dynamic = "force-dynamic";
export const revalidate = 0;

import { getUserSessionServer } from "@/app/api/auth/actions/auth-actions";
import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Server Actions",
  description: "Listado de Todos",
};

export default async function ServerTodosPage() {
  const user = await getUserSessionServer();

  if (!user) redirect("/api/auth/signin");

  const todos = await prisma.todo.findMany({
    where: { userId: user.id },
    orderBy: { description: "asc" },
  });

  return (
    <>
      <span className="text-3xl mb-10">Server Actions</span>
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo />
      </div>

      <TodosGrid todos={todos} />
    </>
  );
}
