import { ensure } from "../../helpers";
import { Theme } from "../../themes/types";

const themeState = (): Theme => {
  return ensure(
    localStorage.getItem("theme"),
    undefined,
    "light",
    "dark",
  ) as Theme;
};

export default themeState;
