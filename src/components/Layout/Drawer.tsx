import { useCallback } from "react";
import {
  useMediaQuery,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Hidden,
  Drawer as MuiDrawer,
  Theme,
  Tooltip,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import clsx from "clsx";

import {
  DoubleArrow as ShowMoreIcon,
  Home as HomeIcon,
} from "@mui/icons-material";

import { useTranslate } from "../../hooks";
import { toggleDrawer } from "../../store/drawer/drawer.actions";

import UserInformation from "./UserInformation";
import ThemeSwitcher from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";
import Logout from "./Logout";

import useStyles from "./Drawer.styles";

const Drawer = (): JSX.Element => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const translate = useTranslate();

  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("md"));

  const { status, items } = useSelector((state) => state.drawer);

  const toggle = useCallback(() => {
    dispatch(toggleDrawer());
  }, [dispatch]);

  const drawer = (
    <>
      <div className={classes.toolbar} />
      <Divider />
      <List className={classes.list}>
        <ListItem button key="homepage" component={Link} to="/">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={translate("pages.home")} />
        </ListItem>
        {items.map(({ key, label, icon: MenuIcon, path }) => (
          <ListItem
            button
            key={key}
            component={Link}
            to={{
              pathname: path,
            }}
            className={clsx(status && classes.height48)}
          >
            <ListItemIcon>
              <MenuIcon />
            </ListItemIcon>
            <ListItemText primary={translate(label || `pages.${key}`)} />
          </ListItem>
        ))}

        {!isSmall ? (
          <Tooltip
            title={translate(status ? "actions.showLess" : "actions.showMore")}
          >
            <ListItem
              button
              className={clsx(classes.last, status && classes.height48)}
              onClick={toggle}
            >
              {status && (
                <ListItemText primary={translate("actions.showLess")} />
              )}
              <ListItemIcon className={classes.lastIcon}>
                <ShowMoreIcon className={clsx(status && classes.reversed)} />
              </ListItemIcon>
            </ListItem>
          </Tooltip>
        ) : null}
      </List>
    </>
  );

  return (
    <div
      className={clsx(
        classes.drawer,
        status ? classes.drawerFull : classes.drawerMini,
      )}
    >
      <Hidden smUp implementation="css">
        <MuiDrawer
          variant="temporary"
          anchor="left"
          open={status && isSmall}
          onClose={toggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawer}
          <Divider />
          <UserInformation />
          <LanguageSwitcher />
          <ThemeSwitcher />
          <Logout />
        </MuiDrawer>
      </Hidden>
      <Hidden mdDown implementation="css">
        <MuiDrawer
          className={clsx(
            classes.drawer,
            status ? classes.drawerFull : classes.drawerMini,
          )}
          classes={{
            paper: clsx(
              classes.drawer,
              status ? classes.drawerFull : classes.drawerMini,
            ),
          }}
          variant="permanent"
        >
          {drawer}
        </MuiDrawer>
      </Hidden>
    </div>
  );
};

export default Drawer;
