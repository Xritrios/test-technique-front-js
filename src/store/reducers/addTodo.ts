import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { AppDispatch } from "..";
import { Todo } from "../../types";
import { getTodoListRequest } from "./getTodoList";

export interface AddTodoState {
  loading: boolean;
  error: string;
}

const initialState: AddTodoState = {
  loading: false,
  error: "",
};

const addTodoSlice = createSlice({
  name: "addTodo",
  initialState,
  reducers: {
    addTodoRequestInit(state) {
      state.error = "";
      state.loading = true;
    },
    addTodoSuccess(state) {
      state.loading = false;
    },
    addTodoFailure(state, { payload }) {
      state.error = payload;
      state.loading = false;
    },
  },
});

const { addTodoRequestInit, addTodoSuccess, addTodoFailure } =
  addTodoSlice.actions;

export const addTodoRequest = (todo: Todo) => async (dispatch: AppDispatch) => {
  dispatch(addTodoRequestInit());
  try {
    await axios.post("/api/todos", { todo });
    dispatch(addTodoSuccess());
    dispatch(getTodoListRequest());
  } catch (error: any) {
    dispatch(addTodoFailure(error.response.data.error));
  }
};

export const { reducer: addTodoReducer } = addTodoSlice;
