import TodoCard from "@components/TodoCard/TodoCard";
import { Box, Stack } from "@mui/material";
import React from "react";

const TodoList = () => {
  return (
    <Box className="todo-list-wrapper" sx={{ padding: '20px'}}>
      <Stack flexDirection={'row'} gap={'10px'}>
        {Array.from({ length: 4 }).map(() => (
          <TodoCard />
        ))}
      </Stack>
    </Box>
  );
};

export default TodoList;
