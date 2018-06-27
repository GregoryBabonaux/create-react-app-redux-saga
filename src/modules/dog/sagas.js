import { all, takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';

// redux
import * as types from './types';
import * as actions from './actions';

export function* getDogs() {
  try {
    const dogs = yield call(axios, `https://dog.ceo/api/breeds/list/all`);
    yield put(actions.getDogsSuccess(dogs.data.message));
  } catch (err) {
    yield put(actions.getDogsError());
  }
}

export function* getBreedPics({payload}) {
  try {
    yield put(actions.selectBreed(payload));
    const breedPics = yield call(axios, `https://dog.ceo/api/breed/${payload}/images`);
    yield put(actions.getBreedPicsSuccess(breedPics.data.message));
  } catch(err) {
    console.log(err);
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(types.GET_DOGS, getDogs),
    takeLatest(types.GET_BREED_PICS, getBreedPics),
  ]);
}
