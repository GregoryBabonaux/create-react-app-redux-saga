import { handleActions } from 'redux-actions';
import * as types from './types';

const initialState = {
  tax: 20,
  currency: 'euros',
  items: [
    {
      name: 'Poney',
      price: 120,
    },
    {
      name: 'Licorne',
      price: 7654,
    }
  ]
};

const basketReducer = handleActions({
  [types.ADD_TO_BASKET]: (state, { payload }) => {
    return {
      ...state,
    }
  },
  [types.REMOVE_FROM_BASKET]: (state, { payload }) => {
    return {
      ...state,
    }
  },
}, initialState);

export default basketReducer;
