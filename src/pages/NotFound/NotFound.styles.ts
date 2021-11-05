import { styled } from "@mui/material/styles";

const PREFIX = "NotFoundWrapper";

export const classes = {
  root: `${PREFIX}-root`,
  icon: `${PREFIX}-icon`,
  message: `${PREFIX}-message`,
  toolbar: `${PREFIX}-toolbar`,
};

export const NotFoundWrapper = styled("div")(({ theme }) => ({
  [`&.${classes.root}`]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      height: "100%",
    },
    [theme.breakpoints.down("md")]: {
      height: "100vh",
      marginTop: "-3em",
    },
  },
  [`& .${classes.icon}`]: {
    width: "9em",
    height: "9em",
  },
  [`& .${classes.message}`]: {
    textAlign: "center",
    fontFamily: "Roboto, sans-serif",
    opacity: 0.5,
    margin: "0 1em",
  },
  [`& .${classes.toolbar}`]: {
    textAlign: "center",
    marginTop: "2em",
  },
}));
