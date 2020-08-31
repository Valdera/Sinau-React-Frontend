import { LocationActionTypes } from './location.types';

export const changePaket = (item) => ({
  type: LocationActionTypes.CHANGE_PAKET,
  payload: item
});

export const changeSession = (item) => ({
  type: LocationActionTypes.CHANGE_SESSION,
  payload: item
});
