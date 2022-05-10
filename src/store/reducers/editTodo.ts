import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { AppDispatch } from "..";
import { Todo } from "../../types";
import { getTodoListRequest } from "./getTodoList";

export interface EditTodoState {
  loading: boolean;
  error: string;
}

const initialState: EditTodoState = {
  loading: false,
  error: "",
};

const editTodoSlice = createSlice({
  name: "editTodo",
  initialState,
  reducers: {
    editTodoRequestInit(state) {
      state.error = "";
      state.loading = true;
    },
    editTodoSuccess(state) {
      state.loading = false;
    },
    editTodoFailure(state, { payload }) {
      state.error = payload;
      state.loading = false;
    },
  },
});

const { editTodoRequestInit, editTodoSuccess, editTodoFailure } =
  editTodoSlice.actions;

export const editTodoRequest =
  (todo: Todo) => async (dispatch: AppDispatch) => {
    dispatch(editTodoRequestInit());
    try {
      await axios.put("/api/todos/edit/" + todo.id, { todo });
      dispatch(editTodoSuccess());
      dispatch(getTodoListRequest());
    } catch (error: any) {
      dispatch(editTodoFailure(error.response.message));
    }
  };

export const { reducer: editTodoReducer } = editTodoSlice;
