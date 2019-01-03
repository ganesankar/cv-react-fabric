import { put, fork, call, takeLatest, all } from 'redux-saga/effects'
import * as actions from '../actions/actions';
import { Api } from "../services";


export function* getRecords() {
  const records = yield call(Api.fetchRecords)
  yield put(actions.receiveRecord(records))
}
export function* watchGetRecords() {
  yield takeLatest(actions.FETCH_DATA, getRecords)
}

export default function* rootSaga() {
  yield all([fork(getRecords), fork(watchGetRecords)])
}
