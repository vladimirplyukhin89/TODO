import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../../store/todoSlice";
import toast from "react-hot-toast";

import { MdClear } from "react-icons/md";
import s from "../../styles/modules/deleteBtn.module.scss";

const DeleteTask = ({ id }) => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(removeTodo({ id }));
        toast(`You're well done`, {
          duration: 5000,
          position: "left-bottom",
          style: {
            color: "rgb(204, 204, 204)",
            backgroundColor: "rgba(141, 30, 141, 0.6)",
            border: "1px solid rgb(204, 204, 204)",
            padding: "0.4rem",
          },
        });
      }}
    >
      <MdClear className={s.todo__close} />
    </button>
  );
};

export default DeleteTask;
