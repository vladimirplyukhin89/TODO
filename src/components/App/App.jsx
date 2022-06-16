import React from "react";
import TodoHeader from "../TodoHeader";
import TodoMain from "../TodoMain";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todoSlice";

import "../../styles/base/_app.scss";
import "../../styles/base/_reset.scss";

function App() {
  const [text, setText] = React.useState("");
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ text }));
    setText("");
  };

  return (
    <div className="app">
      <TodoHeader text={text} setText={setText} handleSubmit={addTask} />

      <TodoMain />
    </div>
  );
}

export default App;
