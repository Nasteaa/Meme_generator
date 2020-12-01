import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";

function TodoGenerator() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ todo: '' });

  function handleSubmit(evt) {
    evt.preventDefault();
    let newTodo = { 
                  ...formData,
                  id: uuid() 
                }
    
    dispatch({ type: "SUBMIT", payload: newMeme });
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(data => ({
      ...data,
      [name]: value
    }));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>What do you want to do?</label>
        <input name="todo" value={formData.todo} onChange={handleChange} />
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );

}

export default TodoGenerator;

// https://react-hook-form.com/