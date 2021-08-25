import { combineReducers } from '@reduxjs/toolkit';
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from 'react-redux';
import { all } from 'redux-saga/effects';

import login from './auth/login';
import { loginSaga } from './auth/loginSaga';
import user from './auth/user';
import { userSaga } from './auth/userSaga';
import loading from './common/loading';

const rootReducer = combineReducers({
  login: login.reducer,
  loading: loading.reducer,
  user: user.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export function* rootSaga() {
  yield all([loginSaga(), userSaga()]);
}

export default rootReducer;
