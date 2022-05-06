import React from "react";
import { Outlet } from "react-router-dom";

export const Layout: React.FC = () => (
  <div style={{ width: "64rem", margin: "0 auto", paddingTop: "2rem" }}>
    <Outlet />
  </div>
);
