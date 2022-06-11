import React from "react";

import { MdClear } from "react-icons/md";
import cn from "classnames";
import s from "./styles.module.scss";

const TodoTask = ({ text, setText, handleSubmit }) => {
  console.log(text.length);
  const textLen = text.length > 0 ? true : false;

  return (
    <div className={s.input}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={s.input__text}
        placeholder=" "
      />

      <label className={s.input__content}>Your todo</label>

      {text && (
        <button
          className={s.input__clear}
          onClick={() => {
            setText("");
          }}
        >
          <MdClear />
        </button>
      )}

      <button
        onClick={handleSubmit}
        className={cn(s.input__btn, { [s.active]: textLen })}
        type="button"
        disabled={!text.length}
      >
        <span className={cn(s.input__btn_after, { [s.active]: textLen })}>
          Add todo
        </span>
      </button>
    </div>
  );
};

export default TodoTask;
