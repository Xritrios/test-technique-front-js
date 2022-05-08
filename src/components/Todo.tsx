import { Card, Typography, Tooltip, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";
import { TodoStatus } from "../types";
import { removeTodoRequest } from "../store/reducers/removeTodo";
import { AppDispatch } from "../store";
import { useDispatch } from "react-redux";

interface TodoComponentProps {
  id: string;
  title: string;
  description: string;
  status: TodoStatus;
}

export const TodoComponent: React.FC<TodoComponentProps> = ({
  id,
  title,
  description,
  status,
}) => {
  const dispatch: AppDispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(removeTodoRequest(id));
  };

  return (
    <Card
      elevation={0}
      style={{
        padding: "2rem",
        border: "2px solid lightgray",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <div>
        <Typography fontSize="1.2rem" fontWeight="bold" color="gray">
          Title
        </Typography>
        <p>{title}</p>

        <Typography fontSize="1.2rem" fontWeight="bold" color="gray">
          Description
        </Typography>
        <p>{description}</p>
      </div>
      <div>
        <Tooltip title="Delete">
          <IconButton style={{ cursor: "pointer" }}>
            <DeleteIcon onClick={() => handleDelete(id)} />
          </IconButton>
        </Tooltip>
      </div>
    </Card>
  );
};
