import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserReduxState {
  userId: string | null;
  username: string | null;
  auth: number;
}

const name = 'user';

const initialState: UserReduxState = {
  userId: null,
  username: null,
  auth: 2,
};

const reducers = {
  login_check() {},
  login_check_success(
    state: UserReduxState,
    action: PayloadAction<UserReduxState>,
  ) {
    state.userId = action.payload.userId;
    state.username = action.payload.username;
    state.auth = action.payload.auth;
  },
  login_check_fail(state: UserReduxState) {
    state.userId = null;
    state.username = null;
    state.auth = 2;
  },
};

const user = createSlice({
  name,
  initialState,
  reducers,
});

export const userActions = user.actions;
export default user;
