import React, { useCallback, useEffect, useState } from 'react'
import TodoList from './TodoList'
import { storage } from './../util/storage';
import { v4 } from 'uuid';
import Footer from './Footer';

export default function TodoForm() {
    const [textInput, setTextInput] = useState('')

    const [todoList, setTodoList] = useState([])

    const [filter, setfilter] = useState('all')

    const [editIndex, setEditIndex] = useState(null)

    const filters = {
      all: () => true,
      active: (item) => !item.isCompleted,
      completed: (item) => item.isCompleted
    }
    
    useEffect(() => {
      setTodoList(storage.get())
    },[])

    useEffect(() => {
      storage.set(todoList)
    }, [todoList])


    const textInputChange = (e) => {
      setTextInput(e.target.value)
    }

    const filterTodo = (type) => {
      setfilter(type)
    }

    const addItem = useCallback(
      (e) => {
        if(e.keyCode === 13) {
          if(textInput){
            setTodoList(
              [
                ...todoList,
                {
                  id: v4(),
                  title: textInput,
                  isCompleted: false
                }
              ]
            )
          }
          setTextInput('')
        }
      },[textInput, todoList]
    )

    const checkedClick = useCallback(
      (id, completed) => {
        setTodoList(prevState => 
          prevState.map(todo => 
            todo.id === id ? { ...todo, isCompleted: !completed} : todo ))
      },[]
    )

    const handleDestroyTodo = useCallback(
      (id) => {
        const destroyTodo = todoList.filter(todo => todo.id !== id)
        setTodoList(destroyTodo)
      },[todoList]
    )

    const checkedAllClick = useCallback(
      (completed) => {
        setTodoList(prevState =>
          prevState.map(todo => 
            todo.isCompleted = {...todo, isCompleted: completed}))
      },[]
    )

    const clearCompleted = (active) => {
      const newTodoList = todoList.filter(active)
      setTodoList(newTodoList)
    }

    const editTodo = (id) => {
      setEditIndex(id)
    }

    const saveTodo = (id, title, isCompleted) => {
      if(editIndex !== null) {
        if(title) {
          setTodoList(prevState => 
            prevState.map(todo => 
              todo.id === editIndex ? { id: id, title: title, isCompleted: isCompleted} : todo ))
        }else {
          handleDestroyTodo(id)
        }
        setEditIndex(null)
      }
    }

    const exitSaveTodo = () => {
      setEditIndex(null)
    }

    return (
      <>
        <header className="header">
          <h1>todos</h1>
          <input 
            className="new-todo" 
            placeholder="What needs to be done?" 
            autoFocus 
            value={textInput}
            onChange={textInputChange}
            onKeyUp={addItem}
          />
        </header>
        {
          todoList.length > 0 && 
          <TodoList 
            todoList={todoList}
            filter={filter}
            filters={filters}
            editTodo={editTodo}
            editIndex={editIndex}
            checkedClick={checkedClick} 
            checkedAllClick={checkedAllClick}
            handleDestroyTodo={handleDestroyTodo}
            saveTodo={saveTodo}
            exitSaveTodo={exitSaveTodo}
          />
        }
        {
          todoList.length > 0 &&
            <Footer 
              count={todoList.filter(filters.active).length}
              todoList={todoList}
              filter={filter}
              filters={filters}
              filterTodo={filterTodo}
              clearCompleted={clearCompleted}
            />
        }
      </>
    )
}
