import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { TodoListPage } from "./pages";

export const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<TodoListPage />} />
    </Route>
  </Routes>
);

export default App;
