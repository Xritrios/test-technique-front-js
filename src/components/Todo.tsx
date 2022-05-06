import { Card, Typography } from "@mui/material";
import React from "react";
import { TodoStatus } from "../types";

interface TodoComponentProps {
  title: string;
  description: string;
  status: TodoStatus;
}

export const TodoComponent: React.FC<TodoComponentProps> = ({
  title,
  description,
  status,
}) => {
  return (
    <Card
      elevation={0}
      style={{
        padding: "2rem",
        border: "2px solid lightgray",
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
    </Card>
  );
};
