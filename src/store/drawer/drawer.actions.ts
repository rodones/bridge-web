import {
  CHANGE_DRAWER_ITEMS,
  DrawerAction,
  SidebarItem,
  TOGGLE_DRAWER,
} from "./drawer.types";

export const changeDrawerItems = (items: SidebarItem[]): DrawerAction => ({
  type: CHANGE_DRAWER_ITEMS,
  payload: items,
});

export const toggleDrawer = (): DrawerAction => ({
  type: TOGGLE_DRAWER,
});
