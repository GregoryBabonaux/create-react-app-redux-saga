import * as types from './types';
import { createAction } from 'redux-actions';

export const getDogs = createAction(types.GET_DOGS);
export const getDogsSuccess = createAction(types.GET_DOGS_SUCCESS);
export const getDogsError = createAction(types.GET_DOGS_ERROR);

export const selectBreed = createAction(types.SELECT_BREED);

export const getBreedPics = createAction(types.GET_BREED_PICS);
export const getBreedPicsSuccess = createAction(types.GET_BREED_PICS_SUCCESS);
export const getBreedPicsError = createAction(types.GET_BREED_PICS_ERROR);
