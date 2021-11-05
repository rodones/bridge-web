import { forwardRef } from "react";
import { MenuItem, ListItemIcon } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import LanguageIcon from "@mui/icons-material/Translate";

import { changeLocale } from "../../store/locale/locale.actions";

import useStyles from "./styles";

const LanguageSwitcher = forwardRef<HTMLLIElement>((props, ref) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const locale = useSelector((state) => state.locale);

  const handleClick = () =>
    dispatch(changeLocale(locale === "tr" ? "en" : "tr"));

  return (
    <MenuItem ref={ref} onClick={handleClick} className={classes.item}>
      <ListItemIcon className={classes.icon}>
        <LanguageIcon />
      </ListItemIcon>

      {locale === "en" ? "Türkçe" : "English"}
    </MenuItem>
  );
});

export default LanguageSwitcher;
