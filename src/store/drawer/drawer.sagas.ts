import { takeEvery, fork, select, ForkEffect } from "redux-saga/effects";
import { TOGGLE_DRAWER } from "./drawer.types";

export function* changeDrawer(): Generator<ForkEffect<never>, void, unknown> {
  yield takeEvery(TOGGLE_DRAWER, function* () {
    const status = yield select((state) => state.drawer.status);
    localStorage.setItem("drawer", status);
  });
}

export default function* drawerSaga(): Generator<
  ForkEffect<void>,
  void,
  unknown
> {
  yield fork(changeDrawer);
}
