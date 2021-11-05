import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducer";
import rootSaga from "./saga";
import preloadedState from "./state";
import { createWebsocketMiddleware } from "./websocket";

const store = (async () => {
  const sagaMiddleware = createSagaMiddleware();
  const websocketMiddleware = createWebsocketMiddleware(
    process.env.RODONES_PANEL_WS,
  );

  const result = createStore(
    rootReducer,
    await preloadedState,
    composeWithDevTools(applyMiddleware(sagaMiddleware, websocketMiddleware)),
  );

  sagaMiddleware.run(rootSaga);

  return result;
})();

export default store;
