import { all, takeLatest } from 'redux-saga/effects';

import * as types from './types';

export function* helloSaga() {
  console.log('Hello Sagas!')
}


export default function* rootSaga() {
  yield all([
    takeLatest(types.INCREMENT, helloSaga)
  ])
}
