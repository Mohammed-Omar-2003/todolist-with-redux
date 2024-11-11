import "./todoItem.css";
import { setCheck } from "../../features/TodoSlice";
import { useDispatch } from "react-redux";

// eslint-disable-next-line react/prop-types
function TodoItem({ title, id, done }) {
  const dispatch = useDispatch();
  const handelChange = () => {
    dispatch(setCheck(id));
  };
  return (
    <div className="todo-item">
      <input
        id={id}
        type="checkbox"
        className="checkbox"
        checked={done}
        onChange={handelChange}
      />
      <label htmlFor={id}>{title}</label>
    </div>
  );
}

export default TodoItem;
