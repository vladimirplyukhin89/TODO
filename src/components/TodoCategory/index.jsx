import React from "react";
//import { useDispatch } from "react-redux";
import { declOfNum, words } from "../../utils";

import { MdClear } from "react-icons/md";
import s from "./styles.module.scss";

const TodoCategory = ({ todos }) => {
  //const dispatch = useDispatch();
  // Кол-во завершённых задач
  let itemsCompleted = todos.filter((todo) => todo.completed === true).length;
  const allTodos = todos.length - itemsCompleted;

  // Для склонения слова items
  const checkAllTasks = (allTodos) => {
    if (allTodos === 0) return "";
    else return allTodos;
  };
  const itemsLeft = declOfNum(allTodos, words);

  React.useEffect(() => {
    console.log("Задание выполнилось");
  }, [allTodos]);

  return (
    <>
      <li className={s.footer}>
        <span>{`${checkAllTasks(allTodos, words)} ${itemsLeft}`}</span>
        <span className={s.footer__all}>All</span>
        <span className={s.footer__active}>Active</span>
        <span className={s.footer__completed}>Completed</span>
        <MdClear
          //onClick={() => {
          //  null;
          //}}
          className={s.clear__completed}
        />
      </li>
    </>
  );
};

export default TodoCategory;
