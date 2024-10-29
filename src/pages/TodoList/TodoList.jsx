import TodoCard from "@components/TodoCard/TodoCard";
import { Box, Container, Grid2, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const TodoList = () => {
  const { todoList } = useSelector((state) => state.taskReducer);

  const [allTasks, setAllTasks] = useState([]);
  const [fetchLoader, setFetchLoader] = useState(true);

  const fetchTasks = () => {
    try {
      setAllTasks(todoList);
    } catch (e) {
      throw new Error(e);
    } finally {
      setFetchLoader(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [todoList]);

  return (
    <Box className="todo-list-wrapper" sx={{ padding: "20px" }}>
      <Container maxWidth="xl">
        {fetchLoader ? (
          <>Fetching tasks...</>
        ) : (
          <Grid2 container columnSpacing={2} rowSpacing={2}>
            {allTasks.length > 0 ? (
              allTasks.map((task) => (
                <Grid2 key={task?._id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                  <TodoCard data={task} />
                </Grid2>
              ))
            ) : (
              <Stack
                justifyContent={"center"}
                alignItems={"center"}
                sx={{ width: "100%", minHeight: "90vh" }}
              >
                <Typography variant="h4" color="primary" fontWeight={600}>
                  No tasks found!
                </Typography>
                <Typography variant="subtitle1">Please add tasks</Typography>
              </Stack>
            )}
          </Grid2>
        )}
      </Container>
    </Box>
  );
};

export default TodoList;
