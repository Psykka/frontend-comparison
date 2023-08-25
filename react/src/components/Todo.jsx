const Todo = ({ todo, onDeleteTodo, }) => {
    const toggleTodoComplete = () => {
        todo.completed = !todo.completed
    }

    return (
        <div className="card">
            <input
                type="checkbox"
                onClick={toggleTodoComplete}
            />
            <div className="card-content">
                <p className={`${todo.completed  ? "completed" : ""}`}>
                    {todo.task}
                </p>
            </div>
            <button 
                className="btn btn-danger"
                onClick={onDeleteTodo}
            >
                Delete
            </button>
        </div>
    )
}

export default Todo
