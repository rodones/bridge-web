import { ensure } from "../../helpers";
import { LocaleState } from "./locale.types";

const localeState = (): LocaleState => {
  return ensure(localStorage.getItem("locale"), "en", "tr") as LocaleState;
};

export default localeState;
