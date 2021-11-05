import {
  CHANGE_DRAWER_ITEMS,
  DrawerAction,
  DrawerState,
  TOGGLE_DRAWER,
} from "./drawer.types";

const initialState: DrawerState = { items: [], status: true };

const drawerReducer = (
  state = initialState,
  action: DrawerAction,
): DrawerState => {
  switch (action.type) {
    case CHANGE_DRAWER_ITEMS:
      return { ...state, items: action.payload };
    case TOGGLE_DRAWER:
      return {
        ...state,
        status: !state.status,
      };
    default:
      return state;
  }
};

export default drawerReducer;
