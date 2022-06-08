import React from "react";
import { toggleTodoComplete } from "../store/todoSlice";
import { useDispatch } from "react-redux";

import "../App.css";

const TodoOutText = ({ id, completed }) => {
  const dispatch = useDispatch();

  return (
    <input
      type="checkbox"
      checked={completed}
      className="app__list_todo-checkbox"
      onChange={() => {
        dispatch(toggleTodoComplete({ id }));
      }}
    />
  );
};

export default TodoOutText;
