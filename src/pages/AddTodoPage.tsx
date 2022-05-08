import { Button, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { addTodoRequest } from "../store/reducers/addTodo";
import { TodoStatus } from "../types";
import { AppDispatch } from "../store";

export const AddTodoPage: React.FC = () => {
  const nav = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const todo = {
      title,
      description,
      status: TodoStatus.PENDING,
    };

    dispatch(addTodoRequest(todo));
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
        <Typography variant="h4">Add a todo</Typography>

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
            onClick={() => nav("/add", { replace: true })}
            style={{ width: "100%", marginTop: "3rem" }}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};
