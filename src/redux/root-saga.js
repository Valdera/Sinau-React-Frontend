import { all, call } from 'redux-saga/effects';
import { examSagas } from './exam/exam.sagas';
import { authSagas } from './auth/auth.sagas';

export default function* rootSaga() {
  yield all([call(examSagas), call(authSagas)]);
}
