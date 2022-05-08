import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { TodoListPage, AddTodoPage, EditTodoPage } from "./pages";

export const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<TodoListPage />} />
      <Route path="/add" element={<AddTodoPage />} />
      <Route path="/edit/:id" element={<EditTodoPage />} />
    </Route>
  </Routes>
);

export default App;
