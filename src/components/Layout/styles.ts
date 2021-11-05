import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  icon: {
    [theme.breakpoints.up("md")]: {
      minWidth: theme.spacing(5),
    },
  },
  item: {
    [theme.breakpoints.down("lg")]: {
      minHeight: `${theme.spacing(5)} !important` as unknown as number,
    },
  },
}));
