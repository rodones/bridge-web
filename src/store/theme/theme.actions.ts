import { CHANGE_THEME, ThemeAction } from "./theme.types";
import { Theme } from "../../themes/types";

export const changeTheme = (theme: Theme): ThemeAction => ({
  type: CHANGE_THEME,
  payload: theme,
});
