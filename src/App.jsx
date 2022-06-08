import React from "react";
import TodoTask from "./components/TodoTask";
import TodoList from "./components/TodoList";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/todoSlice";

import "./App.css";
import "./reset.css";

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
