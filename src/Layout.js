import React from "react";
import Navbar from "./Components/Navbar/Navbar.js";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
