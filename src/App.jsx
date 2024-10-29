import {
  Fab,
  Paper,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import React from "react";
import { appTheme } from "./utils/theme";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import AppRouter from "./routes/AppRouter";
import CreateTaskButton from "@components/CreateTaskButton/CreateTaskButton";
import { config } from "@utils/config";
import { Helmet } from "react-helmet";

const theme = createTheme(appTheme);

const App = () => {
  return (
    <div className="app-wrapper">
      <Helmet>
        <title>List | {config.APP_NAME}</title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <Paper style={{ minHeight: "100vh" }}>
          <BrowserRouter>
            <AppRouter />
            <CreateTaskButton />
          </BrowserRouter>
        </Paper>
      </ThemeProvider>
    </div>
  );
};

export default App;
