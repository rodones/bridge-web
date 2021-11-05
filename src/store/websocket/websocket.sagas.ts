import {
  cancel,
  take,
  takeEvery,
  ForkEffect,
  AllEffect,
  all,
  fork,
  put,
  delay,
  cancelled,
} from "redux-saga/effects";

import { websocketSend } from "./websocket.actions";
import {
  WebSocketFailedAction,
  WEBSOCKET_CONNECTED,
  WEBSOCKET_DISCONNECTED,
  WEBSOCKET_FAILED,
} from "./websocket.types";

function* websocketKeepAlive() {
  try {
    while (true) {
      yield put(websocketSend({ event: "ping" }));
      yield delay(45000);
    }
  } finally {
    if (yield cancelled()) console.log("websocketKeepAlive cancelled");
    else console.log("websocketKeepAlive failed");
  }
}

function* websocketConnected(): Generator<ForkEffect<never>, void, unknown> {
  yield takeEvery(WEBSOCKET_CONNECTED, function* () {
    console.log("Connected to websocket server.");

    const task = yield fork(websocketKeepAlive);
    yield take(WEBSOCKET_DISCONNECTED);
    yield cancel(task);
  });
}

function* websocketDisconnected(): Generator<ForkEffect<never>, void, unknown> {
  yield takeEvery(WEBSOCKET_DISCONNECTED, (): void => {
    console.log("Disconnected from websocket server.");
  });
}

function* websocketFailed(): Generator<ForkEffect<never>, void, unknown> {
  yield takeEvery(WEBSOCKET_FAILED, (action: WebSocketFailedAction): void => {
    console.error(action.error);
  });
}

export default function* websocketSaga(): Generator<
  AllEffect<ForkEffect<void>>,
  void,
  unknown
> {
  yield all([
    fork(websocketConnected),
    fork(websocketDisconnected),
    fork(websocketFailed),
  ]);
}
