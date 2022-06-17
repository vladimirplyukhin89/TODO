import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../../store/todoSlice";
import toast from "react-hot-toast";

import { MdClear } from "react-icons/md";
import s from "../../styles/modules/deleteBtn.module.scss";
import "../../styles/base/_toast.scss";

const DeleteTask = ({ id }) => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(removeTodo({ id }));
        toast(`You're well done`, {
          duration: 5000,
          position: "left-bottom",
          className: "delete",
        });
      }}
    >
      <MdClear className={s.todo__close} />
    </button>
  );
};

export default DeleteTask;
