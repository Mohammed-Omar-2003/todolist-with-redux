import "./input.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveTodo } from "../../features/TodoSlice";
function Input() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const addTodo = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      dispatch(saveTodo({ id: Date.now(), title: input, done: false }));
      setInput("");
      return;
    } else {
      alert("add element !");
      return;
    }
  };
  return (
    <form className="input-container" onSubmit={handleSubmit}>
      <input
        value={input}
        type="text"
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="btn" onClick={addTodo}>
        Add
      </button>
    </form>
  );
}

export default Input;
