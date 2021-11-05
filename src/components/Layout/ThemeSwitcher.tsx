import { forwardRef } from "react";
import { MenuItem, ListItemIcon } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/Brightness4";
import LightModeIcon from "@mui/icons-material/BrightnessHigh";
import { useSelector, useDispatch } from "react-redux";

import { useTranslate } from "../../hooks";

import useStyles from "./styles";
import { changeTheme } from "../../store/theme/theme.actions";

const ThemeSwitcher = forwardRef<HTMLLIElement>((props, ref) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const translate = useTranslate();
  const theme = useSelector((state) => state.theme);

  const handleClick = () =>
    dispatch(changeTheme(theme === "light" ? "dark" : "light"));

  return (
    <MenuItem ref={ref} onClick={handleClick} className={classes.item}>
      <ListItemIcon className={classes.icon}>
        {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </ListItemIcon>
      {translate(`appbar.menu.theme.${theme === "light" ? "dark" : "light"}`)}
    </MenuItem>
  );
});

export default ThemeSwitcher;
