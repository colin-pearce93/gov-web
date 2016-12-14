import {
  CHANGE_DIMENSIONS,
  INIT_DIMENSIONS
} from '../constants/environment';

const initialState = {
  height: null,
  width: null,
  initialWidth: null
};

export default function environment(state = initialState, action) {
  switch (action.type) {
    case CHANGE_DIMENSIONS:
      return Object.assign({}, state, {
        height: action.height,
        width: action.width
      });
    case INIT_DIMENSIONS:
      return Object.assign({}, state, {
        height: action.height,
        width: action.width,
        initialWidth: action.width
      });

    default:
      return state;
  }
}
