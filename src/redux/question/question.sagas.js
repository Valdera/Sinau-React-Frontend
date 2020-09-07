import { QuestionActionTypes } from './question.types';
import { all, takeLatest, call, put } from 'redux-saga/effects';
import Cookies from 'universal-cookie';
import {
  createQuestionSuccess,
  createQuestionFailure
} from './question.actions';
import { createQuestion } from '../../database/api/question.request';

//* WORKERS

function* workerCreateExam({ payload }) {
  try {
    const jwt = new Cookies();
    yield jwt.get('jwt', { path: '/' });
    const user = yield createQuestion({
      jwt: jwt.cookies.jwt,
      formData: payload
    });
    yield put(createQuestionSuccess());
  } catch (err) {
    yield put(createQuestionFailure(err.message));
  }
}

//* WATCHERS

function* watchCreateQuestionStart() {
  yield takeLatest(QuestionActionTypes.CREATE_QUESTION_START, workerCreateExam);
}

export function* questionSagas() {
  yield all([call(watchCreateQuestionStart)]);
}
