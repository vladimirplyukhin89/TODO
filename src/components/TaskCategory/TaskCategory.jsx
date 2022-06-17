import cn from "classnames";
import s from "../../styles/modules/category.module.scss";

const TaskCategory = ({ index, categories, onClickCategory }) => {
  return (
    <>
      <ul className={s.footer}>
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
