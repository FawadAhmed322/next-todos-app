import Link from 'next/link'
import { getTodos, toggleTodo, createTodo } from './utils/TodoUtils'
import { TodoItem } from './components/TodoItem'


export default async function Home() {
  const todos = await getTodos()

  return (
    <>
      <div className="flex flex-col items-center">
        <header className='flex justify-center mb-4 w-full pb-20'>
          <h1 className='text-2xl'>Todos</h1>
        </header>
        <div className="flex flex-col pb-5">
          <form action={createTodo}>
            <div className="flex items-center gap-2">
              <input
                type="text"
                id='title'
                name='title'
                defaultValue=''
                className='border border-slate-300 text-slate-300 px-2 py-1 rounded
           hover:bg-slate-700 focus-within:bg-slate-700 outline-none flex-grow'
              />
              <button
                type="submit"
                className='border border-slate-300 text-slate-300 px-2 py-1 rounded
           hover:bg-slate-700 focus-within:bg-slate-700 outline-none'
              >
                Create
              </button>
            </div>
          </form>
          <div className="flex justify-center mt-5">
            <ul className='pl-4 w-full'>
              {todos.map(todo => (
                <TodoItem key={todo.id} id={todo.id} title={todo.title} complete={todo.complete} toggleTodo={toggleTodo} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
