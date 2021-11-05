import { FATAL_ERROR, PanicState, PanicAction } from "./panic.types";

const panicReducer = (
  state: PanicState = null,
  action: PanicAction,
): PanicState => {
  switch (action.type) {
    case FATAL_ERROR:
      return action.payload;
    default:
      return state;
  }
};

export default panicReducer;
