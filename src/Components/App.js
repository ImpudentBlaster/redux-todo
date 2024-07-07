// import React from 'react'
// import { useDispatch  , useSelector } from 'react-redux'
// import {increment , decrement , handleChange , handleClick} from '../Actions/TodoActions'
// function App() {
//     const state = useSelector(state=>state)

//     const dispatch = useDispatch()
//   return (
//    <>
//    {/* <button onClick={()=>dispatch(increment())}>+</button>
//    <span>{state.count}</span>
//    <button onClick={()=>dispatch(decrement())}>-</button>
//    <input value={state.count} onChange={(e)=>dispatch(handleChange(e.target.value))}></input> */}
//    <h1>Todo List</h1>
//    <input placeholder='Enter the text' value={state.value} onChange={(e)=>dispatch(handleChange(e.target.value))}></input>
//    <button onClick={()=>dispatch(handleClick())}>Submit</button>

//    <ul>
//     {
//         state.todoArr.map(todo =>{

//            return <li>{todo.todoItem}</li>}
//         )
//     }
//    </ul>
//    </>
//   )
// }

// export default App
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleTask,
  handleDescription,
  handleClick,
} from "../Actions/TodoActions";
import TodoList from "./TodoList";

function App() {
  const state = useSelector((state) => state);
  const {  taskVal, desVal ,todoList} = state;
  const dispatch = useDispatch();
  return (
  
    <div className="container">
    <h1>Todo List</h1>
    <div className="buttons">
      <input
        value={taskVal}
        onChange={(event) => dispatch(handleTask(event.target.value))}
        placeholder="Enter the Task"
        ></input>
      <input
        value={desVal}
        onChange={(event) => dispatch(handleDescription(event.target.value))}
        placeholder="Enter the Description"
        ></input>
      <button onClick={() => dispatch(handleClick())}>+</button>
        </div>
      <TodoList todoList={todoList}/>
      </div>
    
  );
}

export default App;
