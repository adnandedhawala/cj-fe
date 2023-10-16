import { useRoutes } from "react-router-dom";
import { menuRoutes } from "./constants";
// import InventoryListView from "../views/InventoryListView";

export default function MenuRouter() {
  return useRoutes(menuRoutes);
}
