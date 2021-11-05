import { CHANGE_THEME, ThemeState, ThemeAction } from "./theme.types";
import { Theme } from "../../themes/types";

const defaultTheme =
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

const themeReducer = (
  state: Theme = defaultTheme,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case CHANGE_THEME:
      return action.payload;
    default:
      return state;
  }
};

export default themeReducer;
