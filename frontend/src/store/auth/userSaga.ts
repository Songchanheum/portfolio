import { call, put, takeLatest } from '@redux-saga/core/effects';
import { AxiosResponse } from 'axios';

import { loginCheck as loginCheckAPI } from '../../api/auth';
import { loadingActions } from '../common/loading';
import { loginActions } from './login';
import { userActions } from './user';

function* doLoginCheck() {
  const { start_loading, stop_loading } = loadingActions;
  const { login_check_success, login_check_fail } = userActions;
  const { logout } = loginActions;
  yield put(start_loading());
  try {
    const response: AxiosResponse = yield call(loginCheckAPI);
    const payload = {
      userId: response.data.userId,
      username: response.data.userNm,
      auth: response.data.authCd === 'A000001' ? 0 : 1,
    };
    yield put(login_check_success(payload));
  } catch (e) {
    yield put(login_check_fail());
    yield put(logout());
  }
  yield put(stop_loading());
}

export function* userSaga() {
  const { login_check } = userActions;
  yield takeLatest(login_check, doLoginCheck);
}
