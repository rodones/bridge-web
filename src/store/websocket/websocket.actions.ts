import {
  WebSocketConnectAction,
  WebSocketConnectedAction,
  WebSocketDisconnectAction,
  WebSocketDisconnectedAction,
  WebSocketFailedAction,
  WebSocketMessage,
  WebSocketReceivedAction,
  WebSocketSendAction,
  WEBSOCKET_CONNECT,
  WEBSOCKET_CONNECTED,
  WEBSOCKET_DISCONNECT,
  WEBSOCKET_DISCONNECTED,
  WEBSOCKET_FAILED,
  WEBSOCKET_RECEIVED,
  WEBSOCKET_SEND,
} from "./websocket.types";

export const websocketConnect = (): WebSocketConnectAction => ({
  type: WEBSOCKET_CONNECT,
});

export const websocketConnected = (): WebSocketConnectedAction => ({
  type: WEBSOCKET_CONNECTED,
});

export const websocketDisconnect = (): WebSocketDisconnectAction => ({
  type: WEBSOCKET_DISCONNECT,
});

export const websocketDisconnected = (): WebSocketDisconnectedAction => ({
  type: WEBSOCKET_DISCONNECTED,
});

export const websocketFailed = (error: Error): WebSocketFailedAction => ({
  type: WEBSOCKET_FAILED,
  error,
});

export const websocketReceived = (
  message: WebSocketMessage,
): WebSocketReceivedAction => ({
  type: WEBSOCKET_RECEIVED,
  payload: message,
});

export const websocketSend = (
  message: WebSocketMessage,
): WebSocketSendAction => ({
  type: WEBSOCKET_SEND,
  payload: message,
});
