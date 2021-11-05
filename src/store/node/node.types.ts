import { AxiosError } from "axios";
import { ErrorResult } from "../../api";
import { Node } from "../../api/node";

export const NODE_GET_ALL_REQUEST = "NODE_GET_ALL_REQUEST";
export const NODE_GET_ALL_SUCCESS = "NODE_GET_ALL_SUCCESS";
export const NODE_GET_ALL_FAILURE = "NODE_GET_ALL_FAILURE";

export interface NodeGetAllRequestAction {
  type: typeof NODE_GET_ALL_REQUEST;
}

export interface NodeGetAllSuccessAction {
  type: typeof NODE_GET_ALL_SUCCESS;
  data: Node[];
}

export interface NodeGetAllFailureAction {
  type: typeof NODE_GET_ALL_FAILURE;
  error: Error | AxiosError;
}

export type NodeAction =
  | NodeGetAllRequestAction
  | NodeGetAllSuccessAction
  | NodeGetAllFailureAction;

export type NodeState = {
  data: Node[];
  error?: ErrorResult;
};
