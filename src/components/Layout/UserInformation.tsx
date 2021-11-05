import { forwardRef } from "react";
import { useSelector } from "react-redux";
import { MenuItem, ListItemIcon } from "@mui/material";
import { AccountCircle as AccountCircleIcon } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  body: {
    [theme.breakpoints.up("md")]: {
      margin: "auto",
      textAlign: "center",
    },
  },
  username: {
    margin: "0",
  },
  role: {
    margin: "0",
    fontWeight: "normal",
  },
  icon: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  item: {
    [theme.breakpoints.down("lg")]: {
      minHeight: `${theme.spacing(7)} !important` as unknown as number,
    },
  },
}));

const UserInformation = forwardRef<HTMLLIElement>((props, ref) => {
  const classes = useStyles();
  const username = useSelector((state) => state.auth.user.username);

  return (
    <MenuItem ref={ref} className={classes.item}>
      <ListItemIcon className={classes.icon}>
        <AccountCircleIcon />
      </ListItemIcon>
      <div className={classes.body}>
        <h5 className={classes.username}>{username}</h5>
      </div>
    </MenuItem>
  );
});

export default UserInformation;
