import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";
import * as yup from "yup";
import { getUserSessionServer } from "../../auth/actions/auth-actions";

interface Segments {
  params: {
    id: string;
  };
}

const getTodo = async (id: string): Promise<Todo | null> => {
  const todo = await prisma.todo.findFirst({
    where: { id },
  });

  const user = await getUserSessionServer();

  if (!user) {
    return null;
  }

  if (todo?.userId !== user.id) {
    return null;
  }

  return todo;
};

export async function GET(request: Request, { params }: Segments) {
  const todo = await getTodo(params.id);

  if (!todo) {
    return NextResponse.json(
      { message: `Todo con id "${params.id}" no existe` },
      { status: 404 }
    );
  }
  return NextResponse.json(todo);
}

const putShema = yup.object({
  complete: yup.boolean().optional(),
  description: yup.string().optional(),
});

export async function PUT(request: Request, { params }: Segments) {
  const user = await getUserSessionServer();

  if (!user) {
    return NextResponse.json("No autorizado", { status: 401 });
  }

  const todo = await getTodo(params.id);

  if (!todo) {
    return NextResponse.json(
      { message: `Todo con id "${params.id}" no existe` },
      { status: 404 }
    );
  }

  try {
    const { complete, description } = await putShema.validate(
      await request.json()
    );

    const updatedTodo = await prisma.todo.update({
      where: {
        id: params.id,
        userId: user.id,
      },
      data: { complete, description },
    });

    return NextResponse.json(updatedTodo);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
