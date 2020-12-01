import React from "react";
import { useSelector, useDispatch } from "react-redux";

function TodoList() {
  
  let todos = useSelector(store => store.todos);

  const dispatch = useDispatch();
  console.log(memes);

  function handleRemove(evt) {
    let buttonId = evt.target.id;
    dispatch({ type: "REMOVE", payload: buttonId });
  }

  return (
    <ul>
      { todos.map(todo => 
        <li className="container" key={todo.id}>
          <div>{todo.todo}</div>
          <button className="exes" id={todo.id} onClick={handleRemove}>X</button>
        </li>) }
    </ul>
  )
}

export default TodoList;