import {
  NODE_GET_ALL_FAILURE,
  NODE_GET_ALL_SUCCESS,
  NodeAction,
  NodeState,
} from "./node.types";

const initialState: NodeState = {
  data: [],
};

const nodeReducer = (
  state: NodeState = initialState,
  action: NodeAction,
): NodeState => {
  switch (action.type) {
    case NODE_GET_ALL_SUCCESS:
      return { data: action.data };

    case NODE_GET_ALL_FAILURE:
      return {
        ...initialState,
        error: ("response" in action.error &&
          action.error.response?.data?.error) ?? {
          code: 0,
          message: action.error.message,
        },
      };

    default:
      return state;
  }
};

export default nodeReducer;
