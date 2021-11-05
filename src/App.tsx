import React, { useEffect } from "react";
import {
  Toolbar,
  Card,
  CardContent,
  Breadcrumbs,
  Typography,
  useMediaQuery,
  Theme,
  Link as MuiLink,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { NavigateNext as NavigateNextIcon } from "@mui/icons-material";
import clsx from "clsx";

import { Link, matchPath, useLocation } from "react-router-dom";
import { AppBar, Drawer } from "./components/Layout";
import { useTranslate } from "./hooks";

import { classes, AppWrapper } from "./App.styles";
import { initApp } from "./store/init/init.actions";

function App({ children }: React.PropsWithChildren<unknown>): JSX.Element {
  const dispatch = useDispatch();
  const translate = useTranslate();
  const { pathname } = useLocation();
  const panic = useSelector((state) => state.panic);
  const isLoggedIn = useSelector((state) => state.auth.loggedIn);
  const breadcrumbs = useSelector((state) => state.breadcrumbs);
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("md"));

  useEffect(() => {
    dispatch(initApp());
  }, []);

  useEffect(() => {
    if (panic) throw panic;
  }, [panic]);

  return (
    <>
      {isLoggedIn ? (
        <AppWrapper className={classes.root}>
          <AppBar />
          <Drawer />
          <div className={classes.content}>
            <Toolbar />
            {breadcrumbs.length > 0 ? (
              <Card className={clsx(classes.breadcrumb, classes.card)}>
                <Breadcrumbs
                  maxItems={isSmall ? 3 : undefined}
                  separator={<NavigateNextIcon fontSize="small" />}
                  aria-label="breadcrumb"
                >
                  {breadcrumbs.map(([text, path], i) => {
                    const matchedPath = matchPath(pathname, { path });
                    const url = matchedPath && matchedPath.url;
                    return url ? (
                      i === breadcrumbs.length - 1 ? (
                        <Typography color="textPrimary" key={text}>
                          {translate(text)}
                        </Typography>
                      ) : (
                        <MuiLink
                          color="inherit"
                          component={Link}
                          to={url}
                          key={text}
                        >
                          {translate(text)}
                        </MuiLink>
                      )
                    ) : null;
                  })}
                </Breadcrumbs>
              </Card>
            ) : null}

            <Card className={classes.card}>
              <CardContent>{children}</CardContent>
            </Card>
          </div>
        </AppWrapper>
      ) : (
        children
      )}
    </>
  );
}

export default App;
