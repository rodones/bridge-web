// https://github.com/marmelab/react-admin/blob/master/packages/ra-ui-materialui/src/layout/Loading.tsx

import React from "react";
import clsx from "clsx";

import { makeStyles } from "@mui/styles";
import CircularProgress from "@mui/material/CircularProgress";

import { useTranslate } from "../../hooks";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  icon: {
    width: "9em",
    height: "9em",
  },
  message: {
    textAlign: "center",
    fontFamily: "Roboto, sans-serif",
    opacity: 0.5,
    margin: "0 1em",
  },
  fullscreen: {
    height: "100vh",
  },
});

interface LoadingProps {
  fullscreen?: boolean;
  loadingPrimary?: string;
  loadingSecondary?: string;
}

const Loading: React.FunctionComponent<LoadingProps> = ({
  fullscreen = false,
  loadingPrimary = "pages.loading.title",
  loadingSecondary = "pages.loading.subtitle",
}: LoadingProps) => {
  const classes = useStyles();
  const translate = useTranslate();

  return (
    <div className={clsx(classes.container, fullscreen && classes.fullscreen)}>
      <div className={classes.message}>
        <CircularProgress className={classes.icon} color="primary" />
        <h1>{translate(loadingPrimary)}</h1>
        <div>{translate(loadingSecondary)}</div>
      </div>
    </div>
  );
};

export default Loading;
