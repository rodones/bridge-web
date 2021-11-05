export const CHANGE_DRAWER_ITEMS = "CHANGE_DRAWER_ITEMS";
export const TOGGLE_DRAWER = "TOGGLE_DRAWER";

export interface SidebarItem {
  key: string;
  path: string;
  label?: string;
  icon: React.FunctionComponent<unknown>;
}

interface ChangeDrawerItemsAction {
  type: typeof CHANGE_DRAWER_ITEMS;
  payload: SidebarItem[];
}

interface ToggleDrawerAction {
  type: typeof TOGGLE_DRAWER;
}

export type DrawerAction = ChangeDrawerItemsAction | ToggleDrawerAction;

export interface DrawerState {
  items: SidebarItem[];
  status: boolean;
}
