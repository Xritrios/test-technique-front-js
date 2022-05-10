import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { AppDispatch } from "..";
import { Todo } from "../../types";
import { getTodoListRequest } from "./getTodoList";

export interface RemoveTodoState {
  loading: boolean;
  error: string;
}

const initialState: RemoveTodoState = {
  loading: false,
  error: "",
};

const removeTodoSlice = createSlice({
  name: "removeTodo",
  initialState,
  reducers: {
    removeTodoRequestInit(state) {
      state.error = "";
      state.loading = true;
    },
    removeTodoSuccess(state) {
      state.loading = false;
    },
    removeTodoFailure(state, { payload }) {
      state.error = payload;
      state.loading = false;
    },
  },
});

const { removeTodoRequestInit, removeTodoSuccess, removeTodoFailure } =
  removeTodoSlice.actions;

export const removeTodoRequest = (id: string) => async (dispatch: AppDispatch) => {
  dispatch(removeTodoRequestInit());
  try {
    await axios.delete("/api/todos/" + id);
    dispatch(removeTodoSuccess());
    dispatch(getTodoListRequest());
  } catch (error: any) {
    dispatch(removeTodoFailure(error.response.message));
  }
};

export const { reducer: removeTodoReducer } = removeTodoSlice;
