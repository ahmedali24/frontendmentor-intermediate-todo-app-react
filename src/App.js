import React, { useState } from "react";
import "./App.css";
import AddTodo from "./Components/AddTodo";
import Todos from "./Components/Todos";
import TodoHeader from "./Components/TodoHeader";
import bgDesktopLight from "./images/bg-desktop-light.jpg";

const data = [
  {
    todo: "Complete online JavaScript course",
    isCompleted: false,
    id: Math.floor(Math.random() * 10000000000),
  },
  {
    todo: "Jog around the park 3 times",
    isCompleted: false,
    id: Math.floor(Math.random() * 10000000000),
  },
  {
    todo: "10 minutes meditation",
    isCompleted: false,
    id: Math.floor(Math.random() * 10000000000),
  },
  {
    todo: "Read for 1 hour",
    isCompleted: false,
    id: Math.floor(Math.random() * 10000000000),
  },
  {
    todo: "Pick up groceries",
    isCompleted: false,
    id: Math.floor(Math.random() * 10000000000),
  },
  {
    todo: "Complete Todo App on Frontend Mentor",
    isCompleted: false,
    id: Math.floor(Math.random() * 10000000000),
  },
];

function App() {
  const [todos, setTodos] = useState(data);

  return (
    <div className="App">
      <div className="top-img"></div>
      <main>
        <TodoHeader />
        <AddTodo setTodos={setTodos} />
        {/* <TodoList todos={todos} /> */}
        <Todos setTodos={setTodos} todos={todos} />
      </main>
    </div>
  );
}

export default App;
