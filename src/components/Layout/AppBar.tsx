import React, { useState, useCallback } from "react";
import {
  AppBar as MuiAppBar,
  Toolbar,
  Tooltip,
  Menu,
  Typography,
  IconButton,
  useMediaQuery,
  Theme,
} from "@mui/material";

import {
  Menu as MenuIcon,
  AccountCircle as AccountIcon,
} from "@mui/icons-material";

import { useDispatch } from "react-redux";
import ThemeSwitcher from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";
import UserInformation from "./UserInformation";
import Logout from "./Logout";
import { useTranslate } from "../../hooks";
import LoadingIndicator from "./LoadingIndicator";
import { toggleDrawer } from "../../store/drawer/drawer.actions";
import useStyles from "./AppBar.styles";

const AppBar = (): JSX.Element => {
  const classes = useStyles();
  const translate = useTranslate();
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const dispatch = useDispatch();
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("md"));
  const isMenuOpen = Boolean(anchorEl);

  const toggle = useCallback(() => {
    dispatch(toggleDrawer());
  }, [dispatch]);

  const handleUserMenuOpen = (event: React.MouseEvent) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <MuiAppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          {isSmall ? (
            <IconButton
              edge="start"
              className={classes.menuButton}
              onClick={toggle}
              color="inherit"
              aria-label="open drawer"
              size="large"
            >
              <MenuIcon />
            </IconButton>
          ) : null}

          <div lang="en">
            <Typography className={classes.title} variant="h6" noWrap>
              RODONES
            </Typography>
          </div>

          <div className={classes.grow} />

          <LoadingIndicator />

          <Tooltip
            title={translate("appbar.menu")}
            aria-label="profile menu"
            className={classes.userMenu}
          >
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls="appbar-user-menu"
              aria-haspopup="false"
              className={classes.menuButton}
              onClick={handleUserMenuOpen}
              color="inherit"
              size="large"
            >
              <AccountIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </MuiAppBar>

      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id="appbar-user-menu"
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={handleMenuClose}
        className={classes.userMenuContainer}
      >
        <UserInformation />
        <LanguageSwitcher />
        <ThemeSwitcher />
        <Logout />
      </Menu>
    </>
  );
};

export default AppBar;
