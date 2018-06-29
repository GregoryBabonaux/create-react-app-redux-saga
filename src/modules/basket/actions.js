import * as types from './types';
import { createAction } from 'redux-actions';

export const addToBasket = createAction(types.ADD_TO_BASKET);
export const removeFromBasket = createAction(types.REMOVE_FROM_BASKET);
