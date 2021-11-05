// original: https://raw.githubusercontent.com/marmelab/react-admin/master/packages/ra-ui-materialui/src/layout/Error.tsx

import {
  Button,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import {
  Error as ErrorIcon,
  ExpandMore as ExpandMoreIcon,
  History as HistoryIcon,
} from "@mui/icons-material";

import { useTranslate } from "../../hooks";
import useStyles from "./ErrorView.styles";

const goBack = () => {
  window.history.go(-1);
};

interface ErrorViewProps {
  error: Error;
  title?: string;
  message?: string;
}

const ErrorView = ({
  error,
  title = "pages.error",
  message = "pages.error.message",
}: ErrorViewProps): JSX.Element => {
  const classes = useStyles();
  const translate = useTranslate();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <h1 className={classes.title} role="alert">
          <ErrorIcon className={classes.icon} />
          {translate(title)}
        </h1>

        <div>{translate(message)}</div>

        <Accordion className={classes.panel}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            {translate("pages.error.details")}
          </AccordionSummary>
          <AccordionDetails className={classes.panelDetails}>
            <div>
              <h2>{translate(error.message)}</h2>
            </div>
          </AccordionDetails>
        </Accordion>

        <div className={classes.toolbar}>
          <Button
            variant="contained"
            startIcon={<HistoryIcon />}
            onClick={goBack}
          >
            {translate("actions.back")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorView;
