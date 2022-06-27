/**
 * 문제 상세정보
 */
import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as problemAPI from '../lib/api/problem';
import { takeLatest } from 'redux-saga/effects';

const [READ_PROBLEM, READ_PROBLEM_SUCCESS, READ_PROBLEM_FAILURE] =
  createRequestActionTypes('problem/READ_PROBLEM');
const UNLOAD_PROBLEM = 'problem/UNLOAD_PROBLEM';

export const readProblem = createAction(READ_PROBLEM, (problemId) => problemId);
export const unloadProblem = createAction(UNLOAD_PROBLEM);

const readProblemSaga = createRequestSaga(READ_PROBLEM, problemAPI.readProblem);

export function* problemSaga() {
  yield takeLatest(READ_PROBLEM, readProblemSaga);
}

const initialState = {
  problem: null,
  error: null,
};

const problem = handleActions(
  {
    [READ_PROBLEM_SUCCESS]: (state, { payload: problem }) => ({
      ...state,
      problem,
    }),
    [READ_PROBLEM_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_PROBLEM]: () => initialState,
  },
  initialState
);

export default problem;
