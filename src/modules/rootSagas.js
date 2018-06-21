import { fork } from 'redux-saga/effects';

import counterSaga  from './counter/sagas';
import authSaga from './auth/sagas';

const sagas = [
  counterSaga,
  authSaga,
]

export default function* rootSaga() {
  yield sagas.map(saga => fork(saga));
}