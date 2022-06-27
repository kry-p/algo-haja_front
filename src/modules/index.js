/**
 * Redux root
 */
// Redux
import { combineReducers } from 'redux';
// Redux-persist
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// Redux-saga
import { all } from 'redux-saga/effects';
// Reducers
import option from './option';
import loading from './loading';
import auth, { authSaga } from './auth';
import user, { userSaga } from './user';
import problem, { problemSaga } from './problem';
import problems, { problemsSaga } from './problems';

// Redux-persist
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['auth', 'user'],
};

// Redux root reducer
const rootReducer = combineReducers({
  option,
  auth,
  loading,
  user,
  problem,
  problems,
});
export function* rootSaga() {
  yield all([authSaga(), userSaga(), problemSaga(), problemsSaga()]);
}

export default persistReducer(persistConfig, rootReducer);
