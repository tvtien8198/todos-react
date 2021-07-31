import classNames from 'classnames'
import React from 'react'

export default function TodoItem({ 
    todo, 
    checkedClick, 
    handleDestroyTodo, 
    editTodo,
    editIndex,
    saveTodo,
    exitSaveTodo
}) {

    return (
        <li className={classNames({'completed': todo.isCompleted , 'editing': editIndex === todo.id})} >
            <div className="view">
                <input 
                    className="toggle" 
                    type="checkbox"
                    value={todo.title}
                    checked={todo.isCompleted}
                    onChange={() => checkedClick(todo.id,todo.isCompleted)}
                />
                <label onDoubleClick={() => editTodo(todo.id)} >{todo.title}</label>
                <button className="destroy" onClick={() => handleDestroyTodo(todo.id)} ></button>
            </div>
            <input 
                className="edit" 
                defaultValue={todo.title} 
                onKeyUp={(e) => (e.key === 'Enter' && saveTodo(todo.id, e.target.value.trim(), todo.isCompleted)) || (e.key === 'Escape' && exitSaveTodo())} 
                onBlur={(e) => saveTodo(todo.id, e.target.value.trim(), todo.isCompleted)}
            />
        </li>
    )
}
