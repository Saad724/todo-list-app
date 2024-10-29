import React from "react";
import TodoList from "@pages/TodoList/TodoList";
import { Route, Routes } from "react-router-dom";
import CreateTask from "@pages/CreateTask/CreateTask";
import ErrorPage from "@pages/404Page/ErrorPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<TodoList />} />
      <Route path="/create-task" element={<CreateTask />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRouter;
