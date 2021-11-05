import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeBreadcrumbs } from "../../store/breadcrumbs/breadcrumbs.actions";

import { useAuthenticated } from "../../hooks";

const Authenticated = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  useAuthenticated();

  return children;
};

interface ReduxRouteWraperProps {
  isPublic: boolean;
  breadcrumbs: [string, string][];
  children: JSX.Element;
}

const ReduxRouteWraper = ({
  isPublic,
  breadcrumbs,
  children,
}: ReduxRouteWraperProps): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeBreadcrumbs(breadcrumbs));
  }, [dispatch, breadcrumbs]);

  return isPublic ? children : <Authenticated>{children}</Authenticated>;
};

export default ReduxRouteWraper;
