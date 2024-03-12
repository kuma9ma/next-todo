"use client";

import Image from "next/image";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import { getAllTodos } from "./api";
import { useEffect, useState } from "react";



export default function Home() {
  // const todos = await getAllTodos();
  // const [todos] = await query("SELECT * FROM `todo-app`.todos");

  const [todos, setTodos] = useState([]);
  const getTodos = () => {
    const todos = fetch("http://localhost:3000/api/get");
    console.log(todos);
    setTodos(todos as any);
  }

  useEffect(() => {
    getTodos();
  }, []);




  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-300">
      <h1 className="text-4xl font-bold text-gray-700">Nextjs Todo App</h1>
      <div className="mt-4 w-full max-w-xl">
        <div className="w-full text-center px-8 py-6 bg-white shadow-md rounded-lg">
          <AddTask />
          <TodoList todos={todos} />
        </div>
      </div>
    </main>
  );
}
