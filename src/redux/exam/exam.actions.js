import { ExamActionTypes } from './exam.types';

export const fetchExamsStart = () => ({
  type: ExamActionTypes.FETCH_EXAMS_START
});

export const fetchExamsSuccess = (examsMap) => ({
  type: ExamActionTypes.FETCH_EXAMS_SUCCESS,
  payload: examsMap
});

export const fetchExamsFailure = (errMessage) => ({
  type: ExamActionTypes.FETCH_EXAMS_FAILURE,
  payload: errMessage
});
