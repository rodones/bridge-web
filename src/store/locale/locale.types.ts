import { Locale } from "../../locales/types";

export const CHANGE_LOCALE = "CHANGE_LOCALE";

export interface LocaleAction {
  type: typeof CHANGE_LOCALE;
  payload: Locale;
}

export type LocaleState = Locale;
