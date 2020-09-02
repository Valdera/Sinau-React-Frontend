import { ExamActionTypes } from './exam.types';
import { all, takeLatest, call, put } from 'redux-saga/effects';
import { fetchExamsFailure, fetchExamsSuccess } from './exam.actions';
import { changeExamData } from './exam.utils';
import { getAllExams } from '../../database/api/exam.request';

//* WORKERS

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

export function* examSagas() {
  yield all([call(fetchExamsStart)]);
}
