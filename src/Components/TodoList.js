import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'
function TodoList({todoList}) {
    
  return (
    <>
{todoList.length !== 0 ? <Task todoList={todoList}/> : <p>No Task Available</p>}
    </>
  )
}

export default TodoList