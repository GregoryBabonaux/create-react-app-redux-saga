import { handleActions } from 'redux-actions';
import * as types from './types';

const initialState = {
  error: false,
  success: false,
  isLogin: false,
  user: {},
};

const authReducer = handleActions({
  [types.LOGIN_SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      isLogin: true,
    }
  },
  [types.LOGIN_SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      isLogin: false,
      success: true,
      error: false,
      user: payload,
    }
  },
  [types.LOGIN_ERROR]: (state, { payload }) => {
    return {
      ...state,
      isLogin: false,
      success: false,
      error: true,
      user: {}
    }
  },
  [types.LOGOUT]: (state, { payload }) => {
    return initialState;
  }
}, initialState);

export default authReducer;
