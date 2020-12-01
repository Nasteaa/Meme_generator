import React from "react";
import './App.css';
import TodoGenerator from "./TodoGenerator";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="App">
      <TodoGenerator />
      <TodoList />
    </div>
  );
}

export default App;
