import { makeStyles } from "@mui/styles";

const drawerWidth = 240;

export default makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawerFull: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    width: drawerWidth,
  },
  drawerMini: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `${theme.spacing(7)} !important`,
    [theme.breakpoints.down("md")]: {
      width: `0 !important`,
    },
  },
  drawerHidden: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: "0 !important",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
    [theme.breakpoints.down("md")]: {
      width: 0,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  list: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    whiteSpace: "nowrap",
    overflowX: "hidden",
  },
  last: {
    marginTop: "auto",
  },
  lastIcon: {
    margin: "0 auto",
    minWidth: 0,
    color: theme.palette.primary.main,
  },
  reversed: {
    transform: "scale(-1,1)",
  },
  height48: {
    height: 48,
  },
}));
