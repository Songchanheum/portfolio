import { combineReducers } from '@reduxjs/toolkit';
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from 'react-redux';
import { all } from 'redux-saga/effects';

import loading from './common/loading';

const rootReducer = combineReducers({
  loading: loading.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export function* rootSaga() {
  yield all([]);
}

export default rootReducer;
