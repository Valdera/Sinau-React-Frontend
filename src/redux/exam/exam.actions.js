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

export const createExamStart = (data) => ({
  type: ExamActionTypes.CREATE_EXAM_START,
  payload: data
});

export const createExamSuccess = () => ({
  type: ExamActionTypes.CREATE_EXAM_SUCCESS
});

export const createExamFailure = (err) => ({
  type: ExamActionTypes.CREATE_EXAM_FAILURE,
  payload: err
});
