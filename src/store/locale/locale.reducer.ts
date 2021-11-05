import { Locale } from "../../locales/types";
import { CHANGE_LOCALE, LocaleAction, LocaleState } from "./locale.types";

const localeReducer = (
  state: Locale = "tr",
  action: LocaleAction,
): LocaleState => {
  switch (action.type) {
    case CHANGE_LOCALE:
      return action.payload;
    default:
      return state;
  }
};

export default localeReducer;
