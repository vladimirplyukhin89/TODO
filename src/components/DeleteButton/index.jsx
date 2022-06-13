import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../../store/todoSlice";

import { MdClear } from "react-icons/md";
import s from "./styles.module.scss";

const DeleteButton = ({ id }) => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(removeTodo({ id }));
      }}
    >
      <MdClear className={s.todo__close} />
    </button>
  );
};

export default DeleteButton;
