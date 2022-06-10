import React from "react";

import "./scss/styles.scss";

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

      <button onClick={handleSubmit} className="input__btn">
        <span>Add todo</span>
      </button>
    </div>
  );
};

export default TodoTask;
