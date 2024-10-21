import React from "react";
import ErrorPic from "@assets/images/error-page.webp";
import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ minHeight: "100vh" }}
    >
      <img src={ErrorPic} />
      <Button variant="contained" onClick={() => navigate("/")}>
        Go Back
      </Button>
    </Stack>
  );
};

export default ErrorPage;
