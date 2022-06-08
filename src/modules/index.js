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
import problem, { problemSaga } from './problem';

// Redux-persist
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['auth', 'user'],
};

// Redux root reducer
const rootReducer = combineReducers({ option, auth, loading, user, problem });
export function* rootSaga() {
  yield all([authSaga(), userSaga(), problemSaga()]);
}

export default persistReducer(persistConfig, rootReducer);
