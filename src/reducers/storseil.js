import { DOWN_STORSEIL, UP_STORSEIL } from '../actions/storseil'

const defaultState = {
  up: false,
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case UP_STORSEIL:
      return {up: true, ...action.payload}
    case DOWN_STORSEIL:
      return {up: false};
    default:
      return state;
  }
}