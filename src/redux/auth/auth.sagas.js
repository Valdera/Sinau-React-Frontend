import { takeLatest, put, all, call } from 'redux-saga/effects';
import { AuthActionTypes } from './auth.types';
import Cookies from 'universal-cookie';
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  emailSignUpFailure,
  emailSignUpSuccess,
  forgotPasswordSuccess,
  forgotPasswordFailure
} from './auth.actions';
import {
  signIn,
  signUp,
  forgotPassword
} from '../../database/api/auth.request';

//* WORKERS
function* workerSignUp({ payload }) {
  try {
    const { user, token } = yield signUp(payload);
    const cookies = new Cookies();
    console.log({ user, token });
    yield cookies.set('jwt', token, { path: '/' });
    yield put(emailSignUpSuccess(user));
  } catch (err) {
    alert(err.response.data.message);
    yield put(emailSignUpFailure(err));
  }
}

function* workerSignOut() {
  try {
    const cookies = new Cookies();
    yield cookies.remove('jwt', { path: '/' });
    yield put(signOutSuccess());
  } catch (err) {
    yield put(signOutFailure(err));
  }
}

function* workerSignIn({ payload }) {
  try {
    const { user, token } = yield signIn(payload);
    const cookies = new Cookies();
    yield cookies.set('jwt', token, { path: '/' });
    yield put(signInSuccess(user));
  } catch (err) {
    alert(err.response.data.message);
    yield put(signInFailure(err));
  }
}

function* workerForgotPassword({ payload }) {
  try {
    const message = yield forgotPassword(payload);
    yield put(forgotPasswordSuccess(message));
  } catch (err) {
    alert(err.response.data.message);
    yield put(forgotPasswordFailure(err));
  }
}

//* WATCHERS
function* watchSignUpStart() {
  yield takeLatest(AuthActionTypes.EMAIL_SIGN_UP_START, workerSignUp);
}

function* watchSignInStart() {
  yield takeLatest(AuthActionTypes.SIGN_IN_START, workerSignIn);
}

function* watchSignOutStart() {
  yield takeLatest(AuthActionTypes.SIGN_OUT_START, workerSignOut);
}

function* watchForgotPasswordStart() {
  yield takeLatest(AuthActionTypes.FORGOT_PASSWORD_START, workerForgotPassword);
}

export function* authSagas() {
  yield all([
    call(watchSignInStart),
    call(watchSignUpStart),
    call(watchSignOutStart),
    call(watchForgotPasswordStart)
  ]);
}
