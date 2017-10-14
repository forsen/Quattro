import { MOTOR_START, MOTOR_STOP } from '../actions/motor'

const defaultState = {
  on: false,
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case MOTOR_START:
      return {on: true, ...action.payload}
    case MOTOR_STOP:
      return {on: false};
    default:
      return state;
  }
}