import { LocationActionTypes } from './location.types';

const INITIAL_STATE = {
  currentPaket: '',
  currentSession: ''
};

const locationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LocationActionTypes.CHANGE_PAKET:
      return {
        ...state,
        currentPaket: action.payload
      };
    case LocationActionTypes.CHANGE_SESSION:
      return {
        ...state,
        currentSession: action.payload
      };
    default:
      return state;
  }
};

export default locationReducer;
