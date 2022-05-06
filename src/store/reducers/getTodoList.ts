import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { AppDispatch } from "..";
import { Todo } from "../../types";

export interface GetTodoListState {
  todos: Todo[];
  loaded: boolean;
  loading: boolean;
  error: string;
}

const initialState: GetTodoListState = {
  todos: [],
  loaded: false,
  loading: false,
  error: "",
};

const getTodoListSlice = createSlice({
  name: "getTodoList",
  initialState,
  reducers: {
    getTodoListRequestInit(state) {
      state.error = "";
      state.loading = true;
      state.loaded = false;
    },
    getTodoListSuccess(state, { payload }) {
      state.todos = payload.todos;
      state.loaded = true;
      state.loading = false;
    },
    getTodoListFailure(state, { payload }) {
      state.error = payload.error;
      state.loaded = false;
      state.loading = false;
    },
  },
});

const { getTodoListRequestInit, getTodoListSuccess, getTodoListFailure } =
  getTodoListSlice.actions;

export const getTodoListRequest = () => async (dispatch: AppDispatch) => {
  dispatch(getTodoListRequestInit());
  try {
    const { data } = await axios.get("/api/todos");
    dispatch(getTodoListSuccess(data));
  } catch (error: any) {
    dispatch(getTodoListFailure(error.response.message));
  }
};

export const { reducer: getTodoListReducer } = getTodoListSlice;
