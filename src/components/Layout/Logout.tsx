import { forwardRef } from "react";
import { connect } from "react-redux";
import { MenuItem, ListItemIcon } from "@mui/material";
import LogoutIcon from "@mui/icons-material/ExitToApp";

import { Dispatch } from "redux";
import { userLogout } from "../../store/auth/auth.actions";
import useStyles from "./styles";
import { useTranslate } from "../../hooks";

type UserInformationProps = ReturnType<typeof mapDispatchToProps>;

const UserInformation = forwardRef<HTMLLIElement, UserInformationProps>(
  ({ logout }: UserInformationProps, ref) => {
    const classes = useStyles();
    const translate = useTranslate();

    return (
      <MenuItem ref={ref} onClick={logout} className={classes.item}>
        <ListItemIcon className={classes.icon}>
          <LogoutIcon />
        </ListItemIcon>
        {translate("appbar.menu.logout")}
      </MenuItem>
    );
  },
);

const mapDispatchToProps = (dispatch: Dispatch) => ({
  logout: () => dispatch(userLogout()),
});

export default connect(null, mapDispatchToProps, null, { forwardRef: true })(
  UserInformation,
);
