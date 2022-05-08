import { configureStore } from "@reduxjs/toolkit";
import { getTodoListReducer } from "./reducers/getTodoList";
import { getTodoReducer } from "./reducers/getTodo";
import { addTodoReducer } from "./reducers/addTodo";
import { editTodoReducer } from "./reducers/editTodo";
import { removeTodoReducer } from "./reducers/removeTodo";
import { finishTodoReducer } from "./reducers/finishTodo";

export const store = configureStore({
  reducer: {
    getTodoList: getTodoListReducer,
    getTodo: getTodoReducer,
    addTodo: addTodoReducer,
    editTodo: editTodoReducer,
    removeTodo: removeTodoReducer,
    finishTodo: finishTodoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
