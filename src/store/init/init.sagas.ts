import { take, fork, put, ForkEffect, select } from "redux-saga/effects";
import { INIT_APP } from "./init.types";

import { AuthState } from "../auth/auth.types";
import { userLoginSuccess } from "../auth/auth.actions";

export default function* initSaga(): Generator<
  ForkEffect<void>,
  void,
  unknown
> {
  yield fork(function* () {
    yield take(INIT_APP);

    /*
      Prepare application here. 
      For example you fetch data from server.
    */

    const auth: AuthState = yield select((store) => store.auth);

    if (auth.loggedIn) {
      yield put(userLoginSuccess(auth));
    }
  });
}
