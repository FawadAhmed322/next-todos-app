"use client"

import { redirect } from "next/navigation"

type TodoItemProps = {
    id: string,
    title: string,
    complete: boolean,
    toggleTodo: (id: string, complete: boolean) => void
}

function handleToggle(id: string, complete: boolean, toggleTodo: any) {
    toggleTodo(id, complete)
    window.location.href = '/'
}

export function TodoItem({ id, title, complete, toggleTodo }: TodoItemProps) {

    return (
        <li className="flex justify-between items-center gap-1 my-2">
            <label
                htmlFor={id}
                className={complete ? 'line-through pr-3' : 'pr-3'}
            >
                {title}
            </label>
            <input
                id={id}
                type="checkbox"
                className="cursor-pointer peer"
                defaultChecked={complete}
                onChange={(e) => handleToggle(id, e.target.checked, toggleTodo)}
            />
        </li>
    )
}