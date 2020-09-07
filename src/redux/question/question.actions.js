import { QuestionActionTypes } from './question.types';

export const createQuestionStart = (formData) => ({
  type: QuestionActionTypes.CREATE_QUESTION_START,
  payload: formData
});

export const createQuestionSuccess = () => ({
  type: QuestionActionTypes.CREATE_QUESTION_SUCCESS
});

export const createQuestionFailure = (error) => ({
  type: QuestionActionTypes.CREATE_QUESTION_FAILURE,
  payload: error
});
