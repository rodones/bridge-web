import {
  REQUEST_START,
  REQUEST_END,
  LoadingState,
  RequestAction,
} from "./loading.types";

const initialState: LoadingState = 0;

const loadingReducer = (
  state = initialState,
  action: RequestAction,
): LoadingState => {
  switch (action.type) {
    case REQUEST_START: {
      return state + 1;
    }
    case REQUEST_END: {
      return state - 1;
    }
    default:
      return state;
  }
};

export default loadingReducer;
