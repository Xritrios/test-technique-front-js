import { configureStore } from "@reduxjs/toolkit";
import { getTodoListReducer } from "./reducers/getTodoList";
import { addTodoReducer } from "./reducers/addTodo";
import { removeTodoReducer } from "./reducers/removeTodo";

export const store = configureStore({
  reducer: {
    getTodoList: getTodoListReducer,
    addTodo: addTodoReducer,
    removeTodo: removeTodoReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
