import { DOWN_FORSEIL, UP_FORSEIL } from '../actions/forseil'

const defaultState = {
  up: false,
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case UP_FORSEIL:
      return {up: true, ...action.payload}
    case DOWN_FORSEIL:
      return {up: false};
    default:
      return state;
  }
}