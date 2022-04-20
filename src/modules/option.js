import { createAction } from 'redux-actions';

const TOGGLE_DARKMODE = 'option/TOGGLE_DARKMODE';
const TOGGLE_AUTHMODE = 'option/TOGGLE_AUTHMODE';

export const toggleDarkmode = createAction(TOGGLE_DARKMODE);
export const toggleAuthmode = createAction(TOGGLE_AUTHMODE);

const initialState = {
  darkmode: false,
  currentAuth: 'login',
};

function option(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_DARKMODE:
      return {
        ...state,
        darkmode: !state.darkmode,
      };
    case TOGGLE_AUTHMODE:
      return {
        ...state,
        currentAuth: state.currentAuth === 'login' ? 'register' : 'login',
      };
    default:
      return state;
  }
}

export default option;
