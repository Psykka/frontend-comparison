import Todo from './components/Todo'

import { useState } from 'react'

export const App = () => {
  const [todos, setTodos] = useState([
    {
      task: "Fazer apps com React",
      completed: false,
    },
    {
      task: "Programar JavaScript",
      completed: false
    },
  ])

  const onDeleteTodo = (index) => {
    setTodos(oldTodos => oldTodos.splice(index, 1))
  }

  return (
    <>
      <h1 className="title">TODO React</h1>
      <div className="content">
        {todos.map((todo, i) => (
          <Todo key={i} todo={{ ...todo, id: i }} onDeleteTodo={onDeleteTodo} />
        ))}
        <button className="btn btn-primary btn-create-todo">
          Criar tarefa
        </button>
      </div>
    </>
  )
}

export default App
