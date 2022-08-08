import React, { useState } from "react";
import check from "../images/icon-check.svg";

const AddTodo = ({ setTodos }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos((prevTodos) => [
      ...prevTodos,
      {
        todo: todo,
        id: Math.floor(Math.random() * 10000000000),
        isCompleted: false,
      },
    ]);
    setTodo("");
  };

  return (
    <form className="add-todo" onSubmit={handleSubmit}>
      <div className="circle"></div>
      <input
        type="text"
        id="todo-input"
        value={todo}
        onChange={({ target }) => setTodo(target.value)}
      />
    </form>
  );
};

export default AddTodo;
