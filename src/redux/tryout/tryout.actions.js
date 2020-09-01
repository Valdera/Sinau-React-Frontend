import { TryoutActionTypes } from './tryout.types';

export const fetchTryoutStart = () => ({
  type: TryoutActionTypes.FETCH_TRYOUT_START
});

export const fetchTryoutSuccess = (tryoutMap) => ({
  type: TryoutActionTypes.FETCH_TRYOUT_SUCCESS,
  payload: tryoutMap
});

export const fetchTryoutFailure = (errMessage) => ({
  type: TryoutActionTypes.FETCH_TRYOUT_FAILURE,
  payload: errMessage
});

export const addTryout = (item) => ({
  type: TryoutActionTypes.ADD_NEW_TRYOUT,
  payload: item
});

export const updateTryout = (item) => ({
  type: TryoutActionTypes.UPDATE_TRYOUT,
  payload: item
});
