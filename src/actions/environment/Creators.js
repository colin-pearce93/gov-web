import {
  INIT_DIMENSIONS,
  CHANGE_DIMENSIONS
} from '../../constants/environment';

export function init_width_height(height, width) {
  return {
    type: INIT_DIMENSIONS,
    height: height,
    width: width
  };
}


export function change_width_height_dynamic(height, width) {
  return {
    type: CHANGE_DIMENSIONS,
    height,
    width,
  };
}
