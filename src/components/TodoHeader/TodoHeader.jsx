import { MdClear } from "react-icons/md";
import cn from "classnames";
import s from "../../styles/modules/header.module.scss";

const TodoHeader = ({ text, setText, handleSubmit }) => {
  const textLength = text.length > 0 ? true : false;

  return (
    <div className={s.input}>
      <input
        value={text.trimStart()}
        onChange={(e) => setText(e.target.value)}
        className={s.input__text}
        placeholder=" "
      />

      <label className={s.input__content}>Your todo</label>

      {text && (
        <button
          className={s.input__clear}
          onClick={() => {
            setText("");
          }}
        >
          <MdClear />
        </button>
      )}

      <button
        onClick={handleSubmit}
        className={cn(s.input__btn, { [s.active]: textLength })}
        type="button"
        disabled={!text.length}
      >
        <span className={cn(s.input__btn_after, { [s.active]: textLength })}>
          Add todo
        </span>
      </button>
    </div>
  );
};

export default TodoHeader;
