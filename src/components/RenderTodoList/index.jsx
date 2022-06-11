import CheckboxAnimation from "../CheckboxAnimation";
import DeleteButton from "../DeleteButton";
import TodoOutText from "../TodoOutText";

import cn from "classnames";
import s from "./styles.module.scss";

const RenderTodoList = ({ todos }) => {
  return (
    <>
      {todos.map((todo) => (
        <li key={todo.id} className={s.list__todo}>
          <label
            className={cn(s.todo__text, {
              [s.isChecked]: todo.completed,
            })}
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
