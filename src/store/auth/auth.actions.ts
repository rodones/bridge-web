import { AxiosError } from "axios";
import {
  AuthAction,
  UserData,
  LoginData,
  AUTHENTICATION_FAILURE,
  AUTHENTICATION_REQUEST,
  AUTHENTICATION_SUCCESS,
  DEAUTHENTICATE,
} from "./auth.types";

export const userLogin = (loginData: LoginData): AuthAction => ({
  type: AUTHENTICATION_REQUEST,
  payload: loginData,
});

export const userLoginSuccess = (userData: UserData): AuthAction => ({
  type: AUTHENTICATION_SUCCESS,
  data: userData,
});

export const userLoginFailure = (error: Error | AxiosError): AuthAction => ({
  type: AUTHENTICATION_FAILURE,
  error,
});

export const userLogout = (): AuthAction => ({
  type: DEAUTHENTICATE,
});
