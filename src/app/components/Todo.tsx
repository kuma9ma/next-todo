"use client";

import { Task } from '@/types';
import { Input } from 'postcss';
import React, { useEffect, useRef, useState } from 'react'
import { deleteTodo, editTodo } from '../api';

interface TodoProps {
    todo: Task;
}

const Todo = ({ todo }: TodoProps) => {

    const ref = useRef<HTMLInputElement>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editedTaskTitle, setEditedTaskTitle] = useState(todo.text);

    useEffect(() => {
        if (isEditing) {
            ref.current?.focus();
        }
    }, [isEditing])

    const handleEdit = async function () {
        setIsEditing(true);
    }

    const handleSave = async function () {
        await editTodo(todo.id, editedTaskTitle);
        setIsEditing(false);
    }

    const handleDelete = async function () {
        await deleteTodo(todo.id, editedTaskTitle);
    }

    return (
        <>
            <li key={todo.id} className="flex justify-between items-center p-4 bg-white border-l-4 border-blue-500 shadow-md rounded">
                {isEditing ?
                    < input
                        ref={ref}
                        type="text"
                        className="mr-2 py-1 px-2 rounded border border-gray-400"
                        value={editedTaskTitle}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setEditedTaskTitle(e.target.value)} />
                    : <span>{todo.text}</span>}
                <div>
                    {isEditing ?
                        <button
                            onClick={handleSave}
                            className="text-white bg-blue-400 mr-3 rounded-lg px-3 py-1 hover:opacity-90 transition deration-200">
                            Save
                        </button>
                        : <button
                            onClick={handleEdit}
                            className="text-white bg-green-400 mr-3 rounded-lg px-3 py-1 hover:opacity-90 transition deration-200">
                            Edit
                        </button>}
                    <button
                        className="text-white bg-red-400 rounded-lg px-3 py-1 hover:opacity-90 transition deration-200"
                        onClick={handleDelete}>
                        Delete
                    </button>
                </div>
            </li>
        </>
    )
}

export default Todo