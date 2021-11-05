import { FATAL_ERROR, PanicAction } from "./panic.types";

export const die = (error: Error): PanicAction => ({
  type: FATAL_ERROR,
  payload: error,
});
