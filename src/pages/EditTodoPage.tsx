import { Button, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { editTodoRequest } from "../store/reducers/editTodo";
import { getTodoRequest } from "../store/reducers/getTodo";
import { TodoStatus } from "../types";
import { AppDispatch } from "../store";

export const EditTodoPage: React.FC = () => {
  const { id } = useParams();

  const nav = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  const { todo } = useSelector((state: RootState) => state.getTodo);

  useEffect(() => {
    dispatch(getTodoRequest(id));
  }, [dispatch]);

  useEffect(() => {
    setTitle(todo.title);
    setDescription(todo.description);
    setStatus(todo.status);
  }, [todo]);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const todo = {
      id: id,
      title: title,
      description: description,
      status: status,
    };

    dispatch(editTodoRequest(todo));
    nav("/");
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h4">Edit a todo</Typography>

        <Button onClick={() => nav("/")}>Go back to list</Button>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "5rem",
          width: "100%",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            width: "40rem",
          }}
        >
          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            inputProps={{ minLength: 8 }}
          />

          <TextField
            label="Description"
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ marginTop: "3rem" }}
          />

          <Button
            variant="contained"
            disableElevation
            fullWidth
            size="large"
            type="submit"
            onClick={() => nav("/edit/" + id, { replace: true })}
            style={{ width: "100%", marginTop: "3rem" }}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};
