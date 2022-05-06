import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { TodoListPage, AddTodoPage } from "./pages";

export const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<TodoListPage />} />
      <Route path="/add" element={<AddTodoPage />} />
    </Route>
  </Routes>
);

export default App;
