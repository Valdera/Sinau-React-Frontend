import { ExamActionTypes } from './exam.types';
import { all, takeLatest, call, put } from 'redux-saga/effects';
import Cookies from 'universal-cookie';
import {
  fetchExamsFailure,
  fetchExamsSuccess,
  createExamFailure,
  createExamSuccess
} from './exam.actions';
import { changeExamData } from './exam.utils';
import { getAllExams, createExam } from '../../database/api/exam.request';

//* WORKERS

function* workerCreateExam({ payload }) {
  try {
    const jwt = new Cookies();
    yield jwt.get('jwt', { path: '/' });
    yield createExam({ jwt: jwt.cookies.jwt, examData: payload });
    yield put(createExamSuccess());
  } catch (err) {
    yield put(createExamFailure(err));
  }
}

function* fetchExamsAsync() {
  try {
    const examArray = yield getAllExams();
    const examsMap = yield call(changeExamData, examArray);
    yield put(fetchExamsSuccess(examsMap));
  } catch (err) {
    yield put(fetchExamsFailure(err.message));
  }
}

//* WATCHERS

function* fetchExamsStart() {
  yield takeLatest(ExamActionTypes.FETCH_EXAMS_START, fetchExamsAsync);
}

function* watchCreateExamStart() {
  yield takeLatest(ExamActionTypes.CREATE_EXAM_START, workerCreateExam);
}

export function* examSagas() {
  yield all([call(fetchExamsStart), call(watchCreateExamStart)]);
}
