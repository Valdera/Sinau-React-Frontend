import { takeLatest, put, all, call } from 'redux-saga/effects';
import { AuthActionTypes } from './auth.types';
import Cookies from 'universal-cookie';
import {
  updateMeSuccess,
  updateMeFailure,
  deleteMeSuccess,
  deleteMeFailure,
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
  forgotPassword,
  deleteMe,
  updateMe
} from '../../database/api/auth.request';

//* WORKERS
function* workerSignUp({ payload }) {
  try {
    const { user, token } = yield signUp(payload);
    const cookies = new Cookies();
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

function* workerUpdateMe({ payload }) {
  try {
    const jwt = new Cookies();
    yield jwt.get('jwt', { path: '/' });
    const user = yield updateMe({ jwt: jwt.cookies.jwt, updatedData: payload });
    yield put(updateMeSuccess(user));
  } catch (err) {
    alert(err.response.data.message);
    yield put(updateMeFailure(err));
  }
}

function* workerDeleteMe() {
  try {
    const jwt = new Cookies();
    yield jwt.get('jwt', { path: '/' });
    yield deleteMe(jwt.cookies.jwt);
    yield put(deleteMeSuccess());
  } catch (err) {
    alert(err.response.data.message);
    yield put(deleteMeFailure(err));
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

function* watchUpdateMeStart() {
  yield takeLatest(AuthActionTypes.UPDATE_ME_START, workerUpdateMe);
}

function* watchDeleteMeStart() {
  yield takeLatest(AuthActionTypes.DELETE_ME_START, workerDeleteMe);
}

export function* authSagas() {
  yield all([
    call(watchSignInStart),
    call(watchSignUpStart),
    call(watchSignOutStart),
    call(watchForgotPasswordStart),
    call(watchUpdateMeStart),
    call(watchDeleteMeStart)
  ]);
}
