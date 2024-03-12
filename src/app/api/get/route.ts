import { getAllTodos } from "@/app/api"

export async function GET(request: Request) {
    const todos = await getAllTodos();
    return Response.json({ todos });
  }