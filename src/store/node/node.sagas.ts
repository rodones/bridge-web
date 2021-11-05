import { call, ForkEffect, put, takeEvery } from "@redux-saga/core/effects";
import { getNodes } from "../../api";
import { getNodesFailure, getNodesSuccess } from "./node.actions";
import { NODE_GET_ALL_REQUEST } from "./node.types";

function* getNodesSaga() {
  yield takeEvery(NODE_GET_ALL_REQUEST, function* () {
    try {
      const nodes = yield call(getNodes);
      yield put(getNodesSuccess(nodes));
    } catch (err) {
      yield put(getNodesFailure(err as Error));
    }
  });
}

export default function* nodeSaga(): Generator<
  Generator<ForkEffect<never>, void, unknown>,
  void,
  unknown
> {
  yield getNodesSaga();
}
