import React from "react";

import { MdClear } from "react-icons/md";
import s from "./styles.module.scss";

const TodoTask = ({ text, setText, handleSubmit }) => {
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
        className={s.input__btn}
        type="button"
        disabled={!text.length}
      >
        <span className={s.input__btn_after}>Add todo</span>
      </button>
    </div>
  );
};

export default TodoTask;
