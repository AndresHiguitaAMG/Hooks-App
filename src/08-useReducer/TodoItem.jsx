import React from 'react'

export const TodoItem = ({todo, handleOnDeleteTodo, handleOnToggleTodo}) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
        <span className={`align-self-center ${(todo.done ) ? "text-decoration-line-through" : ""}`}
        onClick={() => (handleOnToggleTodo(todo.id))}
        aria-label='span'
        >
          {todo.description}
        </span>
        <button 
          className="btn btn-danger" onClick={() => handleOnDeleteTodo(todo.id)}
          aria-label='button'
        >Borrar
        </button>
    </li>
  )
}
