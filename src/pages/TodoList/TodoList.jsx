import TodoCard from "@components/TodoCard/TodoCard";
import { Box, Container, Grid2, Stack } from "@mui/material";
import React from "react";

const TodoList = () => {
  return (
    <Box className="todo-list-wrapper" sx={{ padding: "20px" }}>
      <Container maxWidth="xl">
        <Grid2 container columnSpacing={2} rowSpacing={2}>
          {Array.from({ length: 10 }).map((_, index) => (
            <Grid2 key={index} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <TodoCard />
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
};

export default TodoList;
