/**
 * 문제 목록
 */
import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as problemAPI from '../lib/api/problem';
import { takeLatest } from 'redux-saga/effects';

const [READ_USERLIST, READ_USERLIST_SUCCESS, READ_USERLIST_FAILURE] =
  createRequestActionTypes('problems/READ_USERLIST');
const UNLOAD_LIST = 'problems/UNLOAD_LIST';

export const readUserList = createAction(READ_USERLIST);
export const unloadList = createAction(UNLOAD_LIST);

const readUserListSaga = createRequestSaga(
  READ_USERLIST,
  problemAPI.getUserProblem
);

export function* problemsSaga() {
  yield takeLatest(READ_USERLIST, readUserListSaga);
}

const initialState = {
  list: null,
  error: null,
  currentPage: -1,
};

const problems = handleActions(
  {
    [READ_USERLIST_SUCCESS]: (state, { payload: list }) => ({
      ...state,
      list,
    }),
    [READ_USERLIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_LIST]: () => initialState,
  },
  initialState
);

export default problems;
