import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 101,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: "0.5em",
  },
  title: {
    display: "none",
    textTransform: "uppercase",
    fontWeight: 600,
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    paddingLeft: theme.spacing(2),
  },
  userMenu: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  icon: { minWidth: theme.spacing(5) },
  logo: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  toolbar: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  userMenuContainer: {
    zIndex: `${theme.zIndex.drawer + 102} !important` as unknown as number,
  },
}));
