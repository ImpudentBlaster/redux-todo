import React from "react";
import { useDispatch } from "react-redux";
import { handleTick, handleCross } from "../Actions/TodoActions";
function Task({ todoList }) {
  const dispatch = useDispatch();
  return (
    <div className="list">
      <ul style={{listStyle:"none"}}>
        {todoList.map((item) => (
          <li>
            <div className="list-div">
              <span onClick={() => dispatch(handleTick(item.id))}>✔ </span>
            <span className={item.isSelected ? "css":""}>
              Task: {item.task} | Description: {item.description}
            </span>
            </div>
            
            <span onClick={() => dispatch(handleCross(item.id))}> ✖</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Task;
