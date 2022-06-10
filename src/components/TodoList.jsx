import React from "react";
import { useSelector } from "react-redux";
import RenderTodoList from "./RenderTodoList";

import "./scss/styles.scss";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <ul className="list">
      <RenderTodoList todos={todos} />
    </ul>
  );
};

export default TodoList;
