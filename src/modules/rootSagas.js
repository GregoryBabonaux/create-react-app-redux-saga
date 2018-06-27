import { fork } from 'redux-saga/effects';

import counterSaga  from './counter/sagas';
import authSaga from './auth/sagas';
import dogSagas from './dog/sagas';

const sagas = [
  counterSaga,
  authSaga,
  dogSagas,
]

export default function* rootSaga() {
  yield sagas.map(saga => fork(saga));
}