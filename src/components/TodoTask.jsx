import React from "react";

import "../App.css";

const TodoTask = ({ text, setText, handleSubmit }) => {
  return (
    <div className="app__input">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="app__input_text"
        placeholder=" "
      />
      <label className="app__input_content">Your todo</label>

      <button onClick={handleSubmit} className="app__input_btn">
        <span>Add todo</span>
      </button>
    </div>
  );
};

export default TodoTask;
