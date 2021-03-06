import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { signInSuccess, signFailure } from './actions';

import history from '~/services/history';
import api from '../../../services/api';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, '/users/signin', {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer: ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/students');
  } catch (err) {
    toast.error('Falha na autenticação.');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, '/users/signup', {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer: ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/home');
  } catch (err) {
    toast.error('Falha na autenticação.');
    const { error } = err.response.data;
    yield put(signFailure(error));
  }
}


export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer: ${token}`;
  }
}

/*
export function setError({ payload }) {
  if (!payload) return;
  const { errorMessage } = payload.auth;
}
*/

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
