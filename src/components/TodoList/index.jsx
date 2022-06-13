import React from "react";
import { useSelector } from "react-redux";
import RenderTodoList from "../RenderTodoList";
import TodoCategory from "../TodoCategory";

import cn from "classnames";
import s from "./styles.module.scss";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const todoLength = todos.length > 0;

  //React.useEffect(() => {
  //  console.log("todos был изменён");
  //}, [todos]);

  return (
    <ul className={cn(s.list, { [s.active]: todoLength })}>
      {todoLength && <h1 className={s.list__title}>TODO</h1>}

      <RenderTodoList todos={todos} />

      {todoLength && <TodoCategory todos={todos} />}
    </ul>
  );
};

export default TodoList;
