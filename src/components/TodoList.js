import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({ 
  todoList, 
  filter, 
  filters, 
  editTodo,
  editIndex,
  checkedClick, 
  checkedAllClick, 
  handleDestroyTodo,
  saveTodo,
  exitSaveTodo
}) {
    return (
        <section className="main">
          <input 
            id="toggle-all" 
            className="toggle-all" 
            onChange={(e) => checkedAllClick(e.target.checked)} 
            type="checkbox"
            checked={todoList.length > 0 && todoList.every(filters.completed) && true}            
          />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <ul className="todo-list">
            {
              todoList.filter(filters[filter]).map(todo => 
                <TodoItem 
                  key={todo.id} 
                  todo={todo} 
                  checkedClick={checkedClick}
                  handleDestroyTodo={handleDestroyTodo}
                  editTodo={editTodo}
                  editIndex={editIndex}
                  saveTodo={saveTodo}
                  exitSaveTodo={exitSaveTodo}
                />
              )
            }
          </ul>
        </section>
    )
}
