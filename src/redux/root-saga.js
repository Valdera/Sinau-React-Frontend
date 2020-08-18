import { all, call } from 'redux-saga/effects';
import { examSagas } from './exam/exam.sagas';

export default function* rootSaga() {
  yield all([call(examSagas)]);
}
