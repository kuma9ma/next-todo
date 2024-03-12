import { deleteTodo } from "@/app/api"

export async function POST(request: Request) {
    const body = await request.json();
    console.log(body);
    await deleteTodo( body.id);
    return Response.json({ message: 'hello' })
  }