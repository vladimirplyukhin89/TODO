import React from "react";
import { toggleTodoComplete } from "../store/todoSlice";
import { useDispatch } from "react-redux";

import "./scss/styles.scss";

const TodoOutText = ({ id, completed }) => {
  const dispatch = useDispatch();

  return (
    <input
      type="checkbox"
      checked={completed}
      className="list__todo-checkbox"
      onChange={() => {
        dispatch(toggleTodoComplete({ id }));
      }}
    />
  );
};

export default TodoOutText;
