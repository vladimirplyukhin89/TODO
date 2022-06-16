import React from "react";
import { toggleTodoComplete } from "../../store/todoSlice";
import { useDispatch } from "react-redux";

import s from "../../styles/modules/complete.module.scss";

const TaskComplete = ({ id, completed }) => {
  const dispatch = useDispatch();

  return (
    <input
      type="checkbox"
      checked={completed}
      className={s.todo__checkbox}
      onChange={() => {
        dispatch(toggleTodoComplete({ id }));
      }}
    />
  );
};

export default TaskComplete;
