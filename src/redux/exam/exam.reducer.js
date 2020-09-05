import { ExamActionTypes } from './exam.types';

const INITIAL_STATE = {
  exams: null,
  examsArr: null,
  isFetching: false,
  errorMessage: undefined
};

const examReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ExamActionTypes.FETCH_EXAMS_START:
      return {
        ...state,
        isFetching: true
      };
    case ExamActionTypes.FETCH_EXAMS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        errorMessage: null,
        exams: action.payload
      };

    case ExamActionTypes.FETCH_EXAMS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default examReducer;
