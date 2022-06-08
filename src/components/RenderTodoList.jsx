import React from "react";
import CheckboxAnimation from "./CheckboxAnimation";
import DeleteButton from "./DeleteButton";
import TodoOutText from "./TodoOutText";

const RenderTodoList = ({ todos }) => {
  const [isChecked, setIsChecked] = React.useState(true);

  return (
    <>
      {todos.map((todo) => (
        <li key={todo.id} className="app__list_todo">
          <label
            className={`app__list_todo-text ${isChecked ? "isChecked" : ""}`}
          >
            <TodoOutText {...todo} />

            <CheckboxAnimation {...todo} />

            <span>{todo.text}</span>

            <DeleteButton {...todo} />
          </label>
        </li>
      ))}
    </>
  );
};

export default RenderTodoList;
