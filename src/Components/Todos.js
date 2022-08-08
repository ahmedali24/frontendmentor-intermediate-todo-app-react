import React, { useState } from "react";
import Todo from "./Todo";
import TodoInfo from "./TodoInfo";

const Todos = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <Todo todos={todos} setTodos={setTodos} key={todo.id} todo={todo} />
      ))}
      <TodoInfo todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Todos;
