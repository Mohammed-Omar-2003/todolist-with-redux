import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "../features/TodoSlice";
const store = configureStore({
  reducer: { todos: TodoSlice },
});
export default store;
