import cn from "classnames";
import s from "../../styles/modules/category.module.scss";

const TaskCategory = ({
  index,
  categories,
  onClickCategory,
  itemsLeft,
  todoLength,
}) => {
  console.log(todoLength);
  return (
    <>
      <ul className={s.footer}>
        <span className={cn({ [s.done]: !todoLength })}>{itemsLeft}</span>
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
