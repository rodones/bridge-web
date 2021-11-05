import { ensure } from "../../helpers";
import { DrawerState } from "./drawer.types";

const drawerState = (): DrawerState => {
  return {
    items: [],
    status: ensure(localStorage.getItem("drawer"), "true", "false") === "true",
  };
};

export default drawerState;
