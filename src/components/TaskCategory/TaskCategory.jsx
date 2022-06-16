import React from "react";

import cn from "classnames";
import s from "../../styles/modules/category.module.scss";

const TaskCategory = ({ index, categories, onClickCategory }) => {
  return (
    <>
      <ul className={s.footer}>
        {categories.map((category, i) => (
          <li
            key={i}
            onClick={() => onClickCategory(category.name)}
            className={cn({ [s.active]: index === i })}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskCategory;
