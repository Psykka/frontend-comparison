import React from 'react'

const Todo = ({ todo }) => {
    return (
        <div className="card">
            <input type="checkbox" />
            <div className="card-content">
                {todo.task}
            </div>
            <button className="btn btn-danger">
                Delete
            </button>
        </div>
    )
}

export default Todo
