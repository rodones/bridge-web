import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const useAuthenticated = (redirectTo = "/login"): void => {
  const history = useHistory();
  const isNotLoggedIn = useSelector((state) => !state.auth.loggedIn);

  useEffect(() => {
    if (isNotLoggedIn)
      history.push(redirectTo, { redirect: history.location.pathname });
  }, [isNotLoggedIn, history, redirectTo]);
};

export default useAuthenticated;
