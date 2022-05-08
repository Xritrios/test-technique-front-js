import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { AppDispatch } from "..";
import { Todo } from "../../types";

export interface GetTodoState {
  todo: Todo;
  loaded: boolean;
  loading: boolean;
  error: string;
}

const initialState: GetTodoState = {
  todo: {},
  loaded: false,
  loading: false,
  error: "",
};

const getTodoSlice = createSlice({
  name: "getTodo",
  initialState,
  reducers: {
    getTodoRequestInit(state) {
      state.error = "";
      state.loading = true;
      state.loaded = false;
    },
    getTodoSuccess(state, { payload }) {
      state.todo = payload.todo;
      state.loaded = true;
      state.loading = false;
    },
    getTodoFailure(state, { payload }) {
      state.error = payload.error;
      state.loaded = false;
      state.loading = false;
    },
  },
});

const { getTodoRequestInit, getTodoSuccess, getTodoFailure } =
  getTodoSlice.actions;

export const getTodoRequest = (id) => async (dispatch: AppDispatch) => {
  dispatch(getTodoRequestInit());
  try {
    const { data } = await axios.get("/api/todos/edit/" + id);
    console.log(data);
    dispatch(getTodoSuccess(data));
  } catch (error: any) {
    dispatch(getTodoFailure(error.response.message));
  }
};

export const { reducer: getTodoReducer } = getTodoSlice;
