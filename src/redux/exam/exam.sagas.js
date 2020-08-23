import { ExamActionTypes } from './exam.types';
import { all, takeLatest, call, put } from 'redux-saga/effects';
import { fetchExamsFailure, fetchExamsSuccess } from './exam.actions';
import { changeExamData } from '../../database/databas.utils';
import { examArray } from './exam.data';

function* fetchExamsAsync() {
  try {
    const examsMap = yield call(changeExamData, examArray);
    yield put(fetchExamsSuccess(examsMap));
  } catch (err) {
    yield put(fetchExamsFailure(err.message));
  }
}

function* fetchExamsStart() {
  yield takeLatest(ExamActionTypes.FETCH_EXAMS_START, fetchExamsAsync);
}

export function* examSagas() {
  yield all([call(fetchExamsStart)]);
}
