export const REQUEST_START = "REQUEST_START";
export const REQUEST_END = "REQUEST_END";

interface RequestStartAction {
  type: typeof REQUEST_START;
}

interface RequestEndAction {
  type: typeof REQUEST_END;
}

export type RequestAction = RequestEndAction | RequestStartAction;
export type LoadingState = number;
