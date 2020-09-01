import { TryoutActionTypes } from './tryout.types';

const INITIAL_STATE = {
  tryout: null,
  isFetching: false,
  errorMessage: undefined
};

const tryoutReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TryoutActionTypes.FETCH_TRYOUT_START:
      return {
        ...state,
        isFetching: true
      };
    case TryoutActionTypes.FETCH_TRYOUT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        errorMessage: null,
        tryout: action.payload
      };
    case TryoutActionTypes.FETCH_TRYOUT_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    case TryoutActionTypes.ADD_NEW_TRYOUT:
      return {
        ...state,
        tryout: action.payload
      };
    case TryoutActionTypes.UPDATE_TRYOUT:
      return {
        ...state,
        tryout: action.payload
      };
    default:
      return state;
  }
};

export default tryoutReducer;
