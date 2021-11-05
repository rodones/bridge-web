import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      padding: "1em",
    },
    fontFamily: "Roboto, sans-serif",
    opacity: 0.5,
  },
  title: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    width: "2em",
    height: "2em",
    marginRight: "0.5em",
  },
  panel: {
    marginTop: "1em",
  },
  panelDetails: {
    whiteSpace: "pre-wrap",
  },
  toolbar: {
    marginTop: "2em",
  },
}));
