import { query } from "@/libs/mysql";
import { Task } from "@/types";
import { stringify } from "querystring";


export const getAllTodos = async (): Promise<Task[]> => {
    // const res = await fetch(`http://localhost:3001/tasks`,
    //     { cache: "no-store" });
    // const todos = res.json();

    const [todos] = await query("SELECT * FROM `todo-app`.todos");

    return todos;
}

export const addTodo = async (todo: Task): Promise<Task> => {
    const res = await fetch(`http://localhost:3001/tasks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
    });
    const newTodo = res.json();

    return newTodo;
}

export const editTodo = async (id: string, newText: string): Promise<Task> => {
    const res = await fetch(`http://localhost:3001/tasks/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: newText }),
    });
    const updatedTodo = res.json();

    return updatedTodo;
}

export const deleteTodo = async (id: string): Promise<void> => {
    // const res = await fetch(`http://localhost:3001/tasks/${id}`, {
    //     method: "DELETE",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    // });

    // const deleteTodo = res.json();

    // return deleteTodo;

    await query("DELETE FROM `todo-app`.todos WHERE id = " + id);
    


}