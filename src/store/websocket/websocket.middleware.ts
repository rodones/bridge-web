import { Dispatch, Middleware, MiddlewareAPI } from "redux";
import {
  websocketConnected,
  websocketDisconnected,
  websocketFailed,
  websocketReceived,
} from "./websocket.actions";
import {
  WebSocketAction,
  WEBSOCKET_CONNECT,
  WEBSOCKET_DISCONNECT,
  isWebSocketMessage,
  WEBSOCKET_SEND,
} from "./websocket.types";

export const createWebsocketMiddleware = (connectUrl: string): Middleware => {
  let ws: WebSocket;

  return (store: MiddlewareAPI) =>
    (next: Dispatch<WebSocketAction>) =>
    (action: WebSocketAction): ReturnType<Dispatch<WebSocketAction>> => {
      switch (action.type) {
        case WEBSOCKET_CONNECT:
          try {
            const { access_token } = store.getState().auth;
            ws = new WebSocket(`${connectUrl}?access_token=${access_token}`);

            ws.onmessage = (event) => {
              try {
                const message = JSON.parse(event.data);

                if (!isWebSocketMessage(message)) {
                  throw new Error(
                    `Expected typeof WebSocketMessage, found ${event.data}`,
                  );
                }
                store.dispatch(websocketReceived(message));
              } catch (error) {
                store.dispatch(websocketFailed(error as Error));
              }
            };

            ws.onerror = (event: Event) => {
              console.log(event);

              store.dispatch(
                websocketFailed(
                  new Error("WebSocket returned an error event."),
                ),
              );
            };

            ws.onopen = () => {
              store.dispatch(websocketConnected());
            };

            ws.onclose = () => {
              store.dispatch(websocketDisconnected());
            };
          } catch (error) {
            store.dispatch(websocketFailed(error as Error));
          }
          break;
        case WEBSOCKET_SEND:
          ws.send(JSON.stringify(action.payload));
          break;
        case WEBSOCKET_DISCONNECT:
          ws.close();
          break;
        default:
          break;
      }

      return next(action);
    };
};
