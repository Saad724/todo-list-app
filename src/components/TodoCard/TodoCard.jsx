import { Card, Typography } from "@mui/material";
import React from "react";
import "./TodoCard.scss";
import { getRandomColor } from "@utils/common";
import { Link } from "react-router-dom";

const TodoCard = ({ data }) => {
  const cardColor = getRandomColor();
  return (
    <Link to={'/edit-task'}>
      <Card className="todo-card" sx={{ backgroundColor: cardColor }}>
        <Typography variant="h5">Title</Typography>
        <Typography className="card-para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          imperdiet viverra nibh, in pellentesque elit cursus id. Suspendisse
          pellentesque libero sed diam consequat dapibus. Nulla facilisi. Nam
          lacus risus, laoreet facilisis facilisis ac, faucibus at nibh. Aenean
          ac elit non magna fermentum vulputate a eget augue. Quisque erat
          lacus, elementum eu pretium sed, rhoncus quis arcu.
        </Typography>
      </Card>
    </Link>
  );
};

export default TodoCard;
