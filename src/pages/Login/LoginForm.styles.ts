import { blue } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

const PREFIX = "LoginFormWrapper";

export const classes = {
  button: `${PREFIX}-button`,
  icon: `${PREFIX}-icon`,
  header: `${PREFIX}-header`,
  cardContent: `${PREFIX}-cardContent`,
  inputContainer: `${PREFIX}-inputContainer`,
  errorMessage: `${PREFIX}-errorMessage`,
};

export const LoginFormWrapper = styled("form")(() => ({
  [`& .${classes.button}`]: {
    width: "100%",
  },
  [`& .${classes.icon}`]: {
    marginRight: "5px",
  },
  [`& .${classes.header}`]: {
    textAlign: "center",
    color: blue[900],
  },
  [`& .${classes.cardContent}`]: {
    padding: "0 !important",
  },
  [`& .${classes.inputContainer}`]: {
    display: "flex",
    padding: "6px 12px",
  },
  [`& .${classes.errorMessage}`]: {
    color: "tomato",
    paddingBottom: 12,
    justifyContent: "center",
  },
}));
