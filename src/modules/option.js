/*
 * 웹 애플리케이션 설정
 */
import { createAction, handleActions } from 'redux-actions';

const TOGGLE_DARKMODE = 'option/TOGGLE_DARKMODE';

export const toggleDarkmode = createAction(TOGGLE_DARKMODE);

const initialState = {
  darkmode: false,
};

const option = handleActions(
  {
    [TOGGLE_DARKMODE]: (state) => ({ ...state, darkmode: !state.darkmode }),
  },
  initialState
);

export default option;
