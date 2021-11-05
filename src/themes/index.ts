import { DeprecatedThemeOptions } from "@mui/material";
import { Theme } from "./types";
import light from "./light";
import dark from "./dark";

const themesDict: Record<Theme, DeprecatedThemeOptions> = {
  light,
  dark,
};

export default themesDict;
