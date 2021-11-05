import { RequestAction, REQUEST_END, REQUEST_START } from "./loading.types";

export const startRequest = (): RequestAction => ({
  type: REQUEST_START,
});

export const endRequest = (): RequestAction => ({
  type: REQUEST_END,
});
