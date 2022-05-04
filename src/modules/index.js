/*
 * Redux root
 */
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { all } from 'redux-saga/effects';
import storage from 'redux-persist/lib/storage';
import option from './option';
import loading from './loading';
import auth, { authSaga } from './auth';
import user, { userSaga } from './user';

// Redux-persist
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['auth', 'user'],
};

// Redux root reducer
const rootReducer = combineReducers({ option, auth, loading, user });
export function* rootSaga() {
  yield all([authSaga(), userSaga()]);
}

export default persistReducer(persistConfig, rootReducer);
