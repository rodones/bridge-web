import { takeEvery, fork, ForkEffect } from "redux-saga/effects";
import { CHANGE_THEME, ThemeAction } from "./theme.types";

export function* changeTheme(): Generator<ForkEffect<never>, void, unknown> {
  yield takeEvery(CHANGE_THEME, ({ payload }: ThemeAction) => {
    localStorage.setItem("theme", payload);
  });
}

export default function* themeSaga(): Generator<
  ForkEffect<void>,
  void,
  unknown
> {
  yield fork(changeTheme);
}
