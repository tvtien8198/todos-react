import React from 'react'

export default function Footer({ 
  count, 
  todoList, 
  filter, 
  filters, 
  filterTodo, 
  clearCompleted
}) {

    return (
        <footer className="footer">
          <span className="todo-count">
            <strong>{count}</strong> item left
          </span>
            <ul className="filters">
              <li>
                  <a className={filter === 'all' ? 'selected' : ''} 
                    onClick={() => filterTodo('all')} href="#/">All
                  </a>
              </li>
              <li>
                  <a className={filter === 'active' ? 'selected': ''}  
                    href="#/active" 
                    onClick={() => filterTodo('active')}>Active
                  </a>
              </li>
              <li>
                  <a className={filter === 'completed' ? 'selected' : ''}  
                    href="#/completed" 
                    onClick={() => filterTodo('completed')}>Completed
                  </a>
              </li>
            </ul>
          {
            todoList.filter(filters.completed).length > 0 && 
              <button className="clear-completed" 
                onClick={() => clearCompleted(filters.active)}>Clear completed
              </button>
          }
        </footer>
    )
}
