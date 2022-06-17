import cn from "classnames";
import s from "../../styles/modules/category.module.scss";

const TaskCategory = ({ index, categories, onClickCategory, itemsLeft }) => {
  return (
    <>
      <ul className={s.footer}>
        <span>{itemsLeft}</span>
        {categories.map((category) => (
          <li
            key={category.id}
            onClick={() => onClickCategory(category.id, category.name)}
            className={cn({ [s.active]: index === category.id })}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskCategory;
