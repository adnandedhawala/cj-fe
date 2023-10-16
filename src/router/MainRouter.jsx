import * as React from "react";
import { useRoutes } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import LoginView from "../views/LoginView";

export default function MainRouter() {
  return useRoutes([
    {
      path: "/home/*",
      element: <DashboardLayout />,
    },
    { path: "/", element: <LoginView /> },
  ]);
}
