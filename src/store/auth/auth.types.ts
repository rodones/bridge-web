import { AxiosError } from "axios";
import { ErrorResult } from "../../api";

export const AUTHENTICATION_REQUEST = "AUTHENTICATION_REQUEST";
export const AUTHENTICATION_SUCCESS = "AUTHENTICATION_SUCCESS";
export const AUTHENTICATION_FAILURE = "AUTHENTICATION_FAILURE";
export const DEAUTHENTICATE = "DEAUTHENTICATE";

export interface UserData {
  access_token: string;
  user: {
    id: number;
    username: string;
  };
}

export interface LoginData {
  username: string;
  password: string;
}

export interface LoginRequestAction {
  type: typeof AUTHENTICATION_REQUEST;
  payload: LoginData;
}

export interface LoginSuccessAction {
  type: typeof AUTHENTICATION_SUCCESS;
  data: UserData;
}

export interface LoginFailureAction {
  type: typeof AUTHENTICATION_FAILURE;
  error: Error | AxiosError;
}

export interface LogoutAction {
  type: typeof DEAUTHENTICATE;
}

export type AuthAction =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction
  | LogoutAction;

export type AuthState = {
  loggedIn: boolean;
  error?: ErrorResult;
} & UserData;
