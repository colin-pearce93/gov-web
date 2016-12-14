import {
  change_width_height_dynamic,
  init_width_height
} from './Creators';

export function initEnvironment() {
  return (dispatch) => {
    dispatch(init_width_height(window.innerHeight, window.innerWidth));

    window.onresize = () => {
      dispatch(change_width_height_dynamic(window.innerHeight, window.innerWidth));
    };
  };
}
