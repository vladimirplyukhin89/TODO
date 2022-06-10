import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../store/todoSlice";

import { MdClear } from "react-icons/md";
import "./scss/styles.scss";

const DeleteButton = ({ id }) => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(removeTodo({ id }));
      }}
    >
      <MdClear className="list__todo-close" />
    </button>
  );
};

export default DeleteButton;
