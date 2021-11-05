import { useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import CircularProgress from "@mui/material/CircularProgress";

const useStyles = makeStyles({
  loader: {
    margin: 14,
  },
});

const LoadingIndicator = (): JSX.Element | null => {
  const loading = useSelector((state) => state.loading > 0);
  const classes = useStyles();

  return loading ? (
    <CircularProgress
      className={classes.loader}
      color="inherit"
      size={18}
      thickness={5}
    />
  ) : null;
};

export default LoadingIndicator;
