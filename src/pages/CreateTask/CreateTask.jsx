import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { addTask, updateList } from "@slice/taskSlice";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";

const CreateTask = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id: taskID } = useParams();
  const [mode, setMode] = useState("create");
  const { todoList } = useSelector((state) => state.taskReducer);
  const [editTask, setEditTask] = useState([]);

  useEffect(() => {
    if (taskID) {
      setMode("edit");
    }
  }, []);

  useEffect(() => {
    const filterTask = todoList.filter((task) => task?._id === Number(taskID));
    setEditTask(filterTask[0] || []);
  }, []);

  const createTask = (values, { resetForm }) => {
    if (mode == "edit") {
      const otherTasks = todoList.filter(
        (task) => task?._id !== Number(taskID)
      );
      dispatch(updateList([...otherTasks, { _id: Number(taskID), ...values }]));
    } else {
      dispatch(addTask({ _id: todoList.length + 1, ...values }));
    }
    resetForm();
    navigate("/");
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required!"),
    description: Yup.string().required("Description is required!"),
  });

  return (
    <Container maxWidth="sm">
      {mode === "edit" && editTask.length === 0 ? (
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ width: "100%", minHeight: "90vh" }}
          gap={2}
        >
          <Typography variant="h4" color="primary" fontWeight={600}>
            Invalid task ID
          </Typography>
          <Button variant="contained" onClick={() => navigate("/")}>
            Go Back
          </Button>
        </Stack>
      ) : (
        <Stack
          className="task-form-wrapper-stack"
          sx={{ minHeight: "100vh" }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography
            color="primary"
            variant="h4"
            sx={{ marginBlock: "20px", fontWeight: "600" }}
          >
            {mode == "edit" ? "Edit" : "Create New"} Task
          </Typography>
          <Formik
            initialValues={{
              title: editTask?.title || "",
              description: editTask?.description || "",
            }}
            enableReinitialize
            validationSchema={validationSchema}
            onSubmit={createTask}
          >
            {({ values, errors, handleChange, handleSubmit }) => (
              <Form style={{ width: "100%" }} onSubmit={handleSubmit}>
                {console.log(values)}
                <Stack gap={2}>
                  <TextField
                    label="Title"
                    name="title"
                    onChange={handleChange}
                    value={values.title}
                    error={errors.title}
                    helperText={errors.title}
                  />
                  <TextField
                    label="Description"
                    name="description"
                    onChange={handleChange}
                    value={values.description}
                    error={errors.description}
                    helperText={errors.description}
                  />
                  <Button
                    variant="contained"
                    sx={{ height: "44px" }}
                    type="submit"
                  >
                    {mode == "edit" ? "Update" : "Create"} Task
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
        </Stack>
      )}
    </Container>
  );
};

export default CreateTask;
