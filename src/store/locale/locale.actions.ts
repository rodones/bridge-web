import { Locale } from "../../locales/types";
import { CHANGE_LOCALE, LocaleAction } from "./locale.types";

export const changeLocale = (locale: Locale): LocaleAction => ({
  type: CHANGE_LOCALE,
  payload: locale,
});
