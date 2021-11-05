import { Theme } from "../../themes/types";

export const CHANGE_THEME = "CHANGE_THEME";

export interface ThemeAction {
  type: typeof CHANGE_THEME;
  payload: Theme;
}

export type ThemeState = Theme;
