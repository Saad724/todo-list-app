import {
  Fab,
  Paper,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import React from "react";
import { appTheme } from "./utils/theme";
import TodoList from "@pages/TodoList/TodoList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateTask from "@pages/CreateTask/CreateTask";
import ErrorPage from "@pages/404Page/ErrorPage";
import AddIcon from "@mui/icons-material/Add";
import './App.scss'

const theme = createTheme(appTheme);

const App = () => {
  return (
    <div className="app-wrapper">
      <ThemeProvider theme={theme}>
        <Paper style={{ minHeight: "100vh" }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<TodoList />} />
              <Route path="/create-task" element={<CreateTask />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </BrowserRouter>
          <Fab className="add-task-button" color="primary" >
            <AddIcon />
          </Fab>
        </Paper>
      </ThemeProvider>
    </div>
  );
};

export default App;
