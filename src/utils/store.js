import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../components/counterSlice";
import todoReducer from "../components/TodoSlice";
const appStore = configureStore({
  reducer: {
    counterSlice: countReducer,
    todoSlice: todoReducer,
  },
});
export default appStore;
