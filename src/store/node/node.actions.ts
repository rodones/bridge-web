import { AxiosError } from "axios";
import { Node } from "../../api/node";
import {
  NodeAction,
  NODE_GET_ALL_FAILURE,
  NODE_GET_ALL_REQUEST,
  NODE_GET_ALL_SUCCESS,
} from "./node.types";

export const getNodes = (): NodeAction => ({
  type: NODE_GET_ALL_REQUEST,
});

export const getNodesSuccess = (nodes: Node[]): NodeAction => ({
  type: NODE_GET_ALL_SUCCESS,
  data: nodes,
});

export const getNodesFailure = (error: Error | AxiosError): NodeAction => ({
  type: NODE_GET_ALL_FAILURE,
  error,
});
