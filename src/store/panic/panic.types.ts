export const FATAL_ERROR = "FATAL_ERROR";

export interface PanicAction {
  type: typeof FATAL_ERROR;
  payload: Error | null;
}

export type PanicState = Error | null;
