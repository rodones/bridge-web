import { takeEvery, fork, ForkEffect } from "redux-saga/effects";
import { CHANGE_LOCALE, LocaleAction } from "./locale.types";

export function* changeLocale(): Generator<ForkEffect<never>, void, unknown> {
  yield takeEvery(CHANGE_LOCALE, ({ payload }: LocaleAction) => {
    localStorage.setItem("locale", payload);
    document.documentElement.lang = payload;
  });
}

export default function* localeSaga(): Generator<
  ForkEffect<void>,
  void,
  unknown
> {
  yield fork(changeLocale);
}
