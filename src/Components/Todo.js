import React, { useState } from "react";
import cross from "../images/icon-cross.svg";

const Todo = ({ todo, todos, setTodos }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const deleteTodo = (id) => {
    let removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div
      className="todo"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <input
        type="checkbox"
        className="circle"
        checked={isCompleted}
        onChange={(e) => {
          setIsCompleted(e.target.checked);
          completeTodo(todo.id);
        }}
      />
      <p className={isCompleted ? "line-through" : null}>{todo.todo}</p>
      {isHovering && (
        <img src={cross} alt="cross" onClick={() => deleteTodo(todo.id)} />
      )}
    </div>
  );
};

export default Todo;
