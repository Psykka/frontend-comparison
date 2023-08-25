import Todo from './components/Todo'

import { useState } from 'react'

export const App = () => {
  const [todos, setCount] = useState([
    {
      task: "Fazer apps com Vue",
      completed: false,
    },
    {
      task: "Programar JavaScript",
      completed: false
    },
  ])

  return (
    <>
      <h1 className="title">TODO React</h1>
      <div className="content">
        {todos.map((todo, i) => (
          <Todo key={i} todo={{ ...todo, id: i }} />
        ))}
        <button className="btn btn-primary btn-create-todo">
          Criar tarefa
        </button>
      </div>
    </>
  )
}

export default App
