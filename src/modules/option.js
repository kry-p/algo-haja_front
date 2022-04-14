import { createAction } from 'redux-actions';

const TOGGLE_DARKMODE = 'option/TOGGLE_DARKMODE';

export const toggleDarkmode = createAction(TOGGLE_DARKMODE);

const initialState = {
  darkmode: false,
};

function option(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_DARKMODE:
      return {
        ...state,
        darkmode: !state.darkmode,
      };
    default:
      return state;
  }
}

export default option;
