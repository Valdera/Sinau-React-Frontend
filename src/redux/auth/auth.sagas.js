import { takeLatest, put, all, call } from 'react-saga/effects';
import { AuthActionTypes } from './auth.types';
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  emailSignUpStart,
  emailSignUpSuccess,
  forgotPasswordSuccess,
  forgotPasswordFailure
} from './auth.actions';

//* WORKERS
function* signUp() {}

function* signOut() {}

function* signIn() {}

function* forgotPassword() {}

//* WATCHERS
function* watchSignUpStart() {
  yield takeLatest(AuthActionTypes.EMAIL_SIGN_UP_START, signUp);
}

function* watchSignInStart() {
  yield takeLatest(AuthActionTypes.SIGN_IN_START, signIn);
}

function* watchSignOutStart() {
  yield takeLatest(AuthActionTypes.SIGN_OUT_START, signOut);
}

function* watchForgotPasswordStart() {
  yield takeLatest(AuthActionTypes.FORGOT_PASSWORD_START, forgotPassword);
}

export function* authSagas() {
  yield all([
    call(watchSignInStart),
    call(watchSignUpStart),
    call(watchSignOutStart),
    call(watchForgotPasswordStart)
  ]);
}
