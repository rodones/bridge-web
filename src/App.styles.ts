import { styled } from "@mui/material/styles";

const PREFIX = "AppWrapper";

export const classes = {
  root: `${PREFIX}-root`,
  breadcrumb: `${PREFIX}-breadcrumb`,
  card: `${PREFIX}-card`,
  content: `${PREFIX}-content`,
};

export const AppWrapper = styled("div")(({ theme }) => ({
  [`&.${classes.root}`]: {
    display: "flex",
  },
  [`& .${classes.breadcrumb}`]: {
    padding: "5px 10px",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  [`& .${classes.card}`]: {
    flexGrow: 1,
    margin: 25,
  },
  [`& .${classes.content}`]: {
    flexGrow: 1,
  },
}));
