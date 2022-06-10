import React from "react";
import CheckboxAnimation from "./CheckboxAnimation";
import DeleteButton from "./DeleteButton";
import TodoOutText from "./TodoOutText";

const RenderTodoList = ({ todos }) => {
  const [isChecked, setIsChecked] = React.useState(true);

  return (
    <>
      {todos.map((todo) => (
        <li key={todo.id} className="list__todo">
          <label
            className={`list__todo-text ${
              todo.completed === true ? "isChecked" : ""
            }`}
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
