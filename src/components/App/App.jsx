import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todoSlice";
import TodoHeader from "../TodoHeader";
import TodoMain from "../TodoMain";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

import "../../styles/base/_app.scss";
import "../../styles/base/_reset.scss";

function App() {
  const [text, setText] = React.useState("");
  const dispatch = useDispatch();

  const addTask = () => {
    if (text.trimStart().length) {
      dispatch(addTodo({ text }));
      setText("");
      toast("Let's do it", {
        duration: 5000,
        position: "right-bottom",
        style: {
          color: "rgb(204, 204, 204)",
          backgroundColor: "rgba(9, 180, 140, 0.6)",
          border: "1px solid rgb(204, 204, 204)",
          padding: "0.4rem",
        },
      });
    }
  };
  return (
    <div className="app">
      <TodoHeader text={text} setText={setText} handleSubmit={addTask} />

      <TodoMain />
      <Toaster />
    </div>
  );
}

export default App;
