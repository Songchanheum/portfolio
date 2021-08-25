import { call, put, takeLatest } from '@redux-saga/core/effects';
import Cookies from 'js-cookie';
import { getContext } from 'redux-saga/effects';
import { History } from 'history';
import { AxiosResponse } from 'axios';

import { login as loginAPI } from '../../api/auth';
import { loginActions } from './login';
import { loadingActions } from '../common/loading';
import { userActions } from './user';

function* doLogin(action: ReturnType<typeof loginActions.login>) {
  const { start_loading, stop_loading } = loadingActions;
  const { login_success, login_fail } = loginActions;
  const { login_check } = userActions;
  yield put(start_loading());
  try {
    const response: AxiosResponse = yield call(loginAPI, action.payload);
    const history: History = yield getContext('history');
    Cookies.set('Authorization', `${response.data.token}`);
    yield put(login_success());
    history.push('/');
    yield put(login_check());
  } catch (e) {
    yield put(login_fail());
  }
  yield put(stop_loading());
}

function* doLogout() {
  const { start_loading, stop_loading } = loadingActions;
  const history: History = yield getContext('history');
  yield put(start_loading());
  try {
    Cookies.remove('Authorization');
    history.push('/');
  } catch (e) {
    console.log(e);
  }
  yield put(stop_loading());
}

export function* loginSaga() {
  const { login, logout } = loginActions;
  yield takeLatest(login, doLogin);
  yield takeLatest(logout, doLogout);
}
