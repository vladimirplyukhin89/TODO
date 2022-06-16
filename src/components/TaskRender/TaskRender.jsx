import React from "react";
import CheckboxAnimation from "../CheckboxAnimation";
import DeleteTask from "../DeleteTask";
import TaskComplete from "../TaskComplete";
import { useDispatch } from "react-redux";

import cn from "classnames";
import s from "../../styles/modules/taskRender.module.scss";

const TaskRender = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={cn(s.list__todo, { [s.completed]: todo.completed })}
        >
          <label
            className={cn(s.todo__text, {
              [s.isChecked]: todo.completed,
            })}
          >
            <TaskComplete {...todo} />

            <CheckboxAnimation {...todo} />

            <span>{todo.text}</span>

            <DeleteTask {...todo} />
          </label>
        </li>
      ))}
    </ul>
  );
};

export default TaskRender;
