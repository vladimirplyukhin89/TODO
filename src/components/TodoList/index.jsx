import React from "react";
import { useSelector } from "react-redux";
import RenderTodoList from "../RenderTodoList";

import cn from "classnames";
import s from "./styles.module.scss";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);

  const todoLen = todos.length > 0;

  return (
    <ul className={cn(s.list, { [s.active]: todoLen })}>
      {todoLen && <h1 className={s.list__title}>TODO</h1>}
      <RenderTodoList todos={todos} />
    </ul>
  );
};

export default TodoList;
