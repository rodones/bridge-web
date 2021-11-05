import {
  CardHeader,
  Button,
  TextField,
  CardContent,
  Box,
  Card,
} from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import clsx from "clsx";
import { useTranslate } from "../../hooks";
import { LoginFormWrapper, classes } from "./LoginForm.styles";

interface LoginFormProps {
  onSubmit: SubmitHandler<LoginFormInput>;
  errorMessage?: string;
}

interface LoginFormInput {
  username: string;
  password: string;
}

const LoginForm = ({ onSubmit, errorMessage }: LoginFormProps): JSX.Element => {
  const translate = useTranslate();
  const { register, handleSubmit } = useForm<LoginFormInput>();

  return (
    <LoginFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <CardHeader className={classes.header} title="RODONES" />

        <CardContent className={classes.cardContent}>
          <Box className={classes.inputContainer}>
            <TextField
              type="text"
              size="small"
              label={translate("pages.login.username")}
              placeholder={translate("pages.login.username")}
              {...register("username", { required: true })}
              fullWidth
              required
            />
          </Box>
          <Box className={classes.inputContainer}>
            <TextField
              type="password"
              size="small"
              label={translate("pages.login.password")}
              placeholder={translate("pages.login.password")}
              {...register("password", { required: true })}
              fullWidth
              required
            />
          </Box>
          <Box className={classes.inputContainer}>
            <Button className={classes.button} size="large" type="submit">
              {translate("pages.login.submit")}
            </Button>{" "}
          </Box>
          {errorMessage && (
            <Box className={clsx(classes.inputContainer, classes.errorMessage)}>
              {errorMessage}
            </Box>
          )}
        </CardContent>
      </Card>
    </LoginFormWrapper>
  );
};

export default LoginForm;
