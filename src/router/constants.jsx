import React from "react";
import { Navigate } from "react-router-dom";
import DashboardView from "../views/DashboardView";

const getItem = (label, key, path, onClick, icon, children) => ({
  key,
  icon,
  children,
  label,
  onClick,
  path,
});

export const menuRoutes = [
  {
    path: "/",
    element: <Navigate to="/home/dashboard" />,
  },
  {
    path: "dashboard",
    element: <DashboardView />,
  },
  {
    path: "inventory",
    element: <div>inv</div>,
  },
  { path: "inventory/add", element: <div>add</div> },
  { path: "*", element: <div>Not found</div> },
];
export const getMenuItems = (navigate) => {
  const onClick = (item) => {
    navigate([...item.keyPath].reverse().join("/"));
  };

  return [
    getItem("Dashboard", "dashboard", "dashboard", onClick),
    getItem("Inventory", "inventory", "inventory", onClick, undefined, [
      getItem("Add", "add", "inventory/add", onClick),
    ]),
  ];
};
