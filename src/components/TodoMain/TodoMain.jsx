import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TaskRender from "../TaskRender/TaskRender";
import TaskCategory from "../TaskCategory/TaskCategory";
import { declOfNum, words } from "../../utils";

import cn from "classnames";
import s from "../../styles/modules/list.module.scss";

const TodoMain = () => {
  const [activeIdx, setActiveIdx] = React.useState(0);
  const todos = useSelector((state) => state.todos.todos);
  const todoLength = todos.length > 0;
  const dispatch = useDispatch();

  // Кол-во завершённых задач
  let itemsCompleted = todos.filter((todo) => todo.completed === true);
  const allTodos = todos.length - itemsCompleted.length;

  // Для склонения слова item
  const checkAllTodos = (allTodos) => {
    if (allTodos === 0) return "";
    else return allTodos;
  };
  const itemsDecl = declOfNum(allTodos, words);

  // Для выбора категории
  const itemsLeft = `${checkAllTodos(allTodos, words)} ${itemsDecl}`;
  const categories = [
    { name: itemsLeft, id: 0 },
    { name: "all", id: 1 },
    { name: "active", id: 2 },
    { name: "completed", id: 3 },
  ];

  const onClickCategory = (id) => {
    setActiveIdx(id);
  };

  return (
    <div className={cn(s.list, { [s.active]: todoLength })}>
      {todoLength ? (
        <h1 className={s.list__title1}>TODO</h1>
      ) : (
        <h1 className={s.list__title2}>No TODO yet</h1>
      )}

      <TaskRender todos={todos} />

      {todoLength && (
        <TaskCategory
          index={activeIdx}
          categories={categories}
          onClickCategory={onClickCategory}
        />
      )}
    </div>
  );
};

export default TodoMain;
