import { handleActions } from 'redux-actions';
import * as types from './types';

const initialState = {
  error: false,
  success: false,
  isFetching: false,
  dogs: [],
  breed: null,
  images: [],
};

const authReducer = handleActions({
  [types.GET_DOGS_SUCCESS]: (state, { payload }) => {
    const dogList = [];
    for (let dog in payload) {
      dogList.push({
        breed: dog,
        types: payload[dog]
      })
    }
    return {
      ...state,
      dogs: dogList,
      isFetching: false,
      error: false,
      success: true,
    }
  },
  [types.GET_DOGS_ERROR]: (state) => {
    return {
      ...state,
      dogs: [],
      isFetching: false,
      error: true,
      success: false,
    }
  },
  [types.SELECT_BREED]: (state, { payload }) => {
    return {
      ...state,
      breed: payload,
    }
  },
  [types.GET_BREED_PICS_SUCCESS]: (state, { payload }) => {
    return {
      ...state, 
      images: payload,
    }
  },
}, initialState);

export default authReducer;
