import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../store/todoSlice";

import { MdClear } from "react-icons/md";
import "../App.css";

const DeleteButton = ({ id }) => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(removeTodo({ id }));
      }}
    >
      <MdClear className="app__list_todo-close" />
    </button>
  );
};

export default DeleteButton;
