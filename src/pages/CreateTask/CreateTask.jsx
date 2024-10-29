import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";

const CreateTask = () => {
  const createTask = (values) => {
    alert(values.title)
  }

  return (
    <Container maxWidth="sm">
      <Stack
        className="task-form-wrapper-stack"
        sx={{ minHeight: "100vh" }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography color="primary" variant="h4" sx={{ marginBlock: '20px', fontWeight: '600'}}> Create New Task </Typography>
        <Formik initialValues={{ title: '', description: '' }} onSubmit={createTask}>
          {({ values, handleChange, handleSubmit }) => (
            <Form style={{ width: '100%'}} onSubmit={handleSubmit}>
              <Stack gap={2}>
                <TextField label="Title" name="title" onChange={handleChange} value={values.title} />
                <TextField label="Description" name="description" onChange={handleChange} value={values.description} />
                <Button variant="contained" sx={{ height: '44px'}} type="submit">Create Task</Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </Stack>
    </Container>
  );
};

export default CreateTask;
