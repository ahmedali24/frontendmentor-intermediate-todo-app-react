import React from "react";

const TodoInfo = ({ todos, setTodos }) => {
  console.log(todos);

  const itemsLeft = todos.filter((todo) => todo.isCompleted === false).length;
  console.log(itemsLeft);

  return (
    <div className="todo-info">
      <span className="items-left">{itemsLeft} items left</span>
      <div className="filter-todo">
        <span className="all" onClick={() => setTodos(todos)}>
          All
        </span>
        <span
          className="active"
          onClick={() =>
            setTodos(todos.filter((todo) => todo.isCompleted === false))
          }
        >
          Active
        </span>
        <span
          className="completed"
          onClick={() =>
            setTodos(todos.filter((todo) => todo.isCompleted === true))
          }
        >
          Completed
        </span>
      </div>
      <span
        className="clear-completed"
        onClick={() =>
          setTodos(todos.filter((todo) => todo.isCompleted === false))
        }
      >
        Clear Completed
      </span>
    </div>
  );
};

export default TodoInfo;
