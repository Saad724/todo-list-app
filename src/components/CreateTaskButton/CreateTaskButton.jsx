import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CreateTaskButton = () => {
  const navigate = useNavigate();

  const createTaskNavigation = () => {
    navigate('create-task')
  };

  return (
    <Fab className="add-task-button" color="primary" onClick={createTaskNavigation}>
      <AddIcon />
    </Fab>
  );
};

export default CreateTaskButton;
