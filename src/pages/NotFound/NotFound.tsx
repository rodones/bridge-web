// source: https://github.com/marmelab/react-admin/raw/master/packages/ra-ui-materialui/src/layout/NotFound.tsx
import { Button } from "@mui/material";
import { HotTub, History } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { useTranslate } from "../../hooks";
import { classes, NotFoundWrapper } from "./NotFound.styles";

function goBack() {
  window.history.go(-1);
}

const NotFound = (): JSX.Element => {
  const translate = useTranslate();
  const loggedIn = useSelector((state) => state.auth.loggedIn);

  return loggedIn ? (
    <NotFoundWrapper className={classes.root}>
      <div className={classes.message}>
        <HotTub className={classes.icon} />
        <h1>{translate("pages.notFound")}</h1>
        <div>{translate("pages.notFound.message")}</div>
      </div>
      <div className={classes.toolbar}>
        <Button variant="contained" startIcon={<History />} onClick={goBack}>
          {translate("actions.back")}
        </Button>
      </div>
    </NotFoundWrapper>
  ) : (
    <Redirect
      to={{ pathname: "/login", state: { redirect: window.location.pathname } }}
    />
  );
};

export default NotFound;
