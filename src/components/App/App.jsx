import React from "react";
import TodoTask from "../TodoTask";
import TodoList from "../TodoList";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todoSlice";

import "../scss/styles.scss";
import "./_app.scss";
import "./_reset.scss";

function App() {
  const [text, setText] = React.useState("");
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ text }));
    setText("");
  };

  return (
    <div className="app">
      <TodoTask text={text} setText={setText} handleSubmit={addTask} />

      <TodoList />
    </div>
  );
}

export default App;
