import { createSlice } from '@reduxjs/toolkit';
import { LoginType } from '../../models/types/login';

interface LoginReduxState {
  login: boolean;
  loginError: boolean;
}

const name = 'login';

const initialState: LoginReduxState = {
  login: false,
  loginError: false,
};

const reducers = {
  login: {
    reducer: () => {},
    prepare: ({ username, password }: LoginType) => {
      return { payload: { username, password } };
    },
  },
  logout(state: LoginReduxState) {
    state.loginError = false;
    state.login = false;
  },
  login_success(state: LoginReduxState) {
    state.loginError = false;
    state.login = true;
  },
  login_fail(state: LoginReduxState) {
    state.loginError = true;
    state.login = false;
  },
};

const login = createSlice({
  name,
  initialState,
  reducers,
});

export const loginActions = login.actions;
export default login;
