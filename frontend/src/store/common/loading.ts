import { createSlice } from '@reduxjs/toolkit';

interface LoadingReduxState {
  loading: boolean;
}

const name = 'loading';

const initialState: LoadingReduxState = {
  loading: false,
};

const reducers = {
  start_loading(state: LoadingReduxState) {
    state.loading = true;
  },
  stop_loading(state: LoadingReduxState) {
    state.loading = false;
  },
};

const loading = createSlice({
  name,
  initialState,
  reducers,
});

export const loadingActions = loading.actions;

export default loading;
