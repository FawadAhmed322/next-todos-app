import { prisma } from '@/db'
import { redirect } from 'next/navigation'

var a = 1

export function getTodos() {
    const todos = prisma.todo.findMany()
    return todos
}

export async function toggleTodo(id: string, complete: boolean) {
    "use server"
    await prisma.todo.update({ where: { id }, data: { complete: { set: complete } } })
    // redirect("/")
}

export async function createTodo(data: FormData) {
    "use server"

    const title = data.get('title')?.valueOf()
    if (typeof (title) !== 'string' || title.length === 0) {
        throw new Error("Invalid Title")
    }

    await prisma.todo.create({ data: { title, complete: false } })

    redirect("/")
}
