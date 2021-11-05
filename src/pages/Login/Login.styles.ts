import { makeStyles } from "@mui/styles";
import { blue } from "@mui/material/colors";

export default makeStyles((theme) => ({
  main: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    height: "1px",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // background: "linear-gradient(to top, #232526, #414345)",
  },
  card: {
    minWidth: 300,
    marginTop: "6em",
  },
  footer: {
    padding: 5,
    textAlign: "center !important" as "center",
    marginTop: 15,
    "&>a": {
      textDecoration: "none",
      color: "white",
      fontWeight: 700,
      "&:hover": {
        color: theme.palette.primary.light,
      },
    },
  },
  avatar: {
    margin: "1em",
    display: "flex",
    justifyContent: "center",
  },
  icon: {
    backgroundColor: blue[900],
  },
}));
