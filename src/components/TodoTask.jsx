import React from "react";

import "./scss/styles.scss";
import { MdClear } from "react-icons/md";

const TodoTask = ({ text, setText, handleSubmit }) => {
  return (
    <div className="input">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="input__text"
        placeholder=" "
      />

      <label className="input__content">Your todo</label>

      {text && (
        <button
          className="input__clear"
          onClick={() => {
            setText("");
          }}
        >
          <MdClear />
        </button>
      )}

      <button
        onClick={handleSubmit}
        className="input__btn"
        type="button"
        disabled={!text.length}
      >
        <span className="input__btn_after">Add todo</span>
      </button>
    </div>
  );
};

export default TodoTask;
