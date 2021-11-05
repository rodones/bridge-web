import { all } from "redux-saga/effects";
import authSaga from "./auth/auth.sagas";
import drawerSaga from "./drawer/drawer.sagas";
import initSaga from "./init/init.sagas";
import localeSaga from "./locale/locale.sagas";
import nodeSaga from "./node/node.sagas";
import themeSaga from "./theme/theme.sagas";
import websocketSaga from "./websocket/websocket.sagas";

function* rootSaga() {
  yield all([
    initSaga(),
    authSaga(),
    websocketSaga(),
    localeSaga(),
    themeSaga(),
    drawerSaga(),
    nodeSaga(),
  ]);
}

export default rootSaga;
