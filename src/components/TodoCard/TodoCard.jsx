import { Card, Typography } from "@mui/material";
import React from "react";
import "./TodoCard.scss";
import { getRandomColor } from "@utils/common";
import { Link } from "react-router-dom";

const TodoCard = ({ data }) => {
  const cardColor = getRandomColor();
  return (
    <Link to={`/edit-task/${data?._id}`}>
      <Card className="todo-card" sx={{ backgroundColor: cardColor }}>
        <Typography variant="h5">{data?.title}</Typography>
        <Typography className="card-para">{data?.description}</Typography>
      </Card>
    </Link>
  );
};

export default TodoCard;
