import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { AppDispatch } from "..";
import { Todo } from "../../types";
import { getTodoListRequest } from "./getTodoList";

export interface FinishTodoState {
  loading: boolean;
  error: string;
}

const initialState: FinishTodoState = {
  loading: false,
  error: "",
};

const finishTodoSlice = createSlice({
  name: "finishTodo",
  initialState,
  reducers: {
    finishTodoRequestInit(state) {
      state.error = "";
      state.loading = true;
    },
    finishTodoSuccess(state) {
      state.loading = false;
    },
    finishTodoFailure(state, { payload }) {
      state.error = payload;
      state.loading = false;
    },
  },
});

const { finishTodoRequestInit, finishTodoSuccess, finishTodoFailure } =
  finishTodoSlice.actions;

export const finishTodoRequest =
  (todo: Todo) => async (dispatch: AppDispatch) => {
    dispatch(finishTodoRequestInit());
    try {
      await axios.put("/api/todos/finish/" + todo.id, { todo });
      dispatch(finishTodoSuccess());
      dispatch(getTodoListRequest());
    } catch (error: any) {
      dispatch(finishTodoFailure(error.response.message));
    }
  };

export const { reducer: finishTodoReducer } = finishTodoSlice;
