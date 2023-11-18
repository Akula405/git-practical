import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todoSlice",
  initialState: { list: [] }, //enter correct spelling of intialState
  reducers: {
    addTodo: (state, action) => {
      state.list.push(action.payload);
    },
    delTodo: (state, action) => {
      const delId = action.payload;
      console.log("deleting Id", delId);
      state.list.filter((user) => user.id !== delId);
    },
  },
});
export const { addTodo, delTodo } = todoSlice.actions;
export default todoSlice.reducer;
