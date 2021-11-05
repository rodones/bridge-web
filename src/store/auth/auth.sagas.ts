import {
  all,
  takeLatest,
  takeEvery,
  put,
  fork,
  call,
  ForkEffect,
  AllEffect,
  CallEffect,
  PutEffect,
} from "redux-saga/effects";
import {
  AUTHENTICATION_FAILURE,
  AUTHENTICATION_REQUEST,
  AUTHENTICATION_SUCCESS,
  DEAUTHENTICATE,
  LoginRequestAction,
  LoginSuccessAction,
  UserData,
  AuthAction,
  LoginFailureAction,
} from "./auth.types";
import { encrypt } from "../cypher";
import { userLoginFailure, userLoginSuccess } from "./auth.actions";
import {
  websocketDisconnect,
  websocketConnect,
} from "../websocket/websocket.actions";
import { login, setToken } from "../../api";
import history from "../../history";

async function saveUserData(userData: UserData) {
  localStorage.setItem("auth", await encrypt(userData));
}

export function* loginRequest(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(
    AUTHENTICATION_REQUEST,
    function* (
      action: LoginRequestAction,
    ): Generator<CallEffect<unknown> | PutEffect<AuthAction>, void, unknown> {
      const {
        payload: { username, password },
      } = action;
      try {
        const data = (yield call(login, username, password)) as UserData;
        yield put(userLoginSuccess(data));
      } catch (err) {
        yield put(userLoginFailure(err as Error));
      }
    },
  );
}

export function* loginSuccess(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(
    AUTHENTICATION_SUCCESS,
    function* ({ data }: LoginSuccessAction) {
      saveUserData(data);
      setToken(data.access_token);
      history.push("/");
      yield put(websocketConnect());
    },
  );
}

export function* loginFailure(): Generator<ForkEffect<never>, void, unknown> {
  yield takeEvery(AUTHENTICATION_FAILURE, ({ error }: LoginFailureAction) => {
    console.log(error);
  });
}

export function* logout(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(DEAUTHENTICATE, function* () {
    yield put(websocketDisconnect());

    localStorage.removeItem("auth");
    setToken("");

    if (history.location.pathname === "/login") {
      const { redirect = "/" } = (history.location.state || {}) as {
        redirect?: string;
      };
      history.push(redirect);
    }
  });
}

export default function* authSaga(): Generator<
  AllEffect<ForkEffect<void>>,
  void,
  unknown
> {
  yield all([
    fork(loginRequest),
    fork(loginSuccess),
    fork(loginFailure),
    fork(logout),
  ]);
}
