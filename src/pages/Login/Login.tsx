import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Avatar } from "@mui/material";

import LockIcon from "@mui/icons-material/Lock";

import { userLogin } from "../../store/auth/auth.actions";

import LoginForm from "./LoginForm";

import useStyles from "./Login.styles";

const Login = (): JSX.Element => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.auth.error?.message ?? "");

  const handleLogin = useCallback(
    ({ username, password }) => dispatch(userLogin({ username, password })),
    [],
  );

  return (
    <div className={classes.main}>
      <div>
        <Card className={classes.card}>
          <div className={classes.avatar}>
            <Avatar className={classes.icon}>
              <LockIcon />
            </Avatar>
          </div>
          <LoginForm onSubmit={handleLogin} errorMessage={errorMessage} />
        </Card>
        <Card className={classes.footer}>
          <a href="https://github.com/rodones/">Rodones Mapping Project</a> ©
          2021
        </Card>
      </div>
    </div>
  );
};

export default Login;
