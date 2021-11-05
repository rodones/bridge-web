import {
  AuthAction,
  AuthState,
  AUTHENTICATION_SUCCESS,
  DEAUTHENTICATE,
} from "./auth.types";

const initialState = {
  loggedIn: false,
} as AuthState;

const authReducer = (
  state: AuthState = initialState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case AUTHENTICATION_SUCCESS:
      return { loggedIn: true, ...action.data };

    case "AUTHENTICATION_FAILURE":
      return {
        ...initialState,
        error: ("response" in action.error &&
          action.error.response?.data?.error) ?? {
          code: 0,
          message: action.error.message,
        },
      };

    case DEAUTHENTICATE:
      return initialState;

    default:
      return state;
  }
};

export default authReducer;
