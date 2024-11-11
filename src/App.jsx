import "./App.css";
import Input from "./components/input/Input";
import TodoItem from "./components/todoItems/TodoItem";
import { useSelector } from "react-redux";
function App() {
  const todolist = useSelector((state) => state.todos.todoList);
  return (
    <div className="app">
      <div className="todo-container">
        {todolist.map((ele) => (
          <TodoItem
            key={ele.id}
            title={ele.title}
            id={ele.id}
            done={ele.done}
          />
        ))}
      </div>
      <Input />
    </div>
  );
}

export default App;
