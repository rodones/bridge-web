export const WEBSOCKET_CONNECT = "WEBSOCKET_CONNECT";
export const WEBSOCKET_DISCONNECT = "WEBSOCKET_DISCONNECT";
export const WEBSOCKET_RECEIVED = "WEBSOCKET_RECEIVED";
export const WEBSOCKET_CONNECTED = "WEBSOCKET_CONNECTED";
export const WEBSOCKET_DISCONNECTED = "WEBSOCKET_DISCONNECTED";
export const WEBSOCKET_FAILED = "WEBSOCKET_FAILED";
export const WEBSOCKET_SEND = "WEBSOCKET_SEND";

export const isWebSocketMessage = (obj: unknown): obj is WebSocketMessage =>
  typeof obj === "object" && !!obj && "event" in obj;

export type WebSocketMessage = {
  event: string;
  data?: unknown;
};

export interface WebSocketConnectAction {
  type: typeof WEBSOCKET_CONNECT;
}

export interface WebSocketDisconnectAction {
  type: typeof WEBSOCKET_DISCONNECT;
}

export interface WebSocketConnectedAction {
  type: typeof WEBSOCKET_CONNECTED;
}

export interface WebSocketDisconnectedAction {
  type: typeof WEBSOCKET_DISCONNECTED;
}

export interface WebSocketReceivedAction {
  type: typeof WEBSOCKET_RECEIVED;
  payload: WebSocketMessage;
}

export interface WebSocketSendAction {
  type: typeof WEBSOCKET_SEND;
  payload: WebSocketMessage;
}

export interface WebSocketFailedAction {
  type: typeof WEBSOCKET_FAILED;
  error: Error;
}

export type WebSocketAction =
  | WebSocketConnectAction
  | WebSocketDisconnectAction
  | WebSocketReceivedAction
  | WebSocketFailedAction
  | WebSocketDisconnectedAction
  | WebSocketSendAction
  | WebSocketConnectedAction;
