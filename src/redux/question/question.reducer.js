import { QuestionActionTypes } from './question.types';

const INITIAL_STATE = {
  question: null,
  error: null
};

const questionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QuestionActionTypes.CREATE_QUESTION_SUCCESS:
      return {
        ...state,
        error: null
      };
    case QuestionActionTypes.CREATE_QUESTION_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default questionReducer;
