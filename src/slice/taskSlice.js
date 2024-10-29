// src/features/counter/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      state.todoList = [...state.todoList, payload];
    },
    updateList: (state, { payload }) => {
      state.todoList = payload
    },
    removeTask: (state, { payload }) => {
      const filteredTasks = state.todoList.filter(task => task._id !== payload);
      state.todoList = filteredTasks;
    },
  },
});

export const { addTask, updateList, removeTask } = taskSlice.actions;
export default taskSlice.reducer;
