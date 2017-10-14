import { MOTOR_HISTORY, TRIP_START } from '../actions/trip'
import { SAVE_TRIP_SUCCESS } from '../actions/api'

const defaultState = {
  active: false,
  motorHistory: []
};

export default (state = defaultState, action) => {
  debugger;
  switch (action.type) {
    case TRIP_START:
      return { ...state, ...action.payload, active: true };
    case MOTOR_HISTORY:
      return { ...state, motorHistory: [...state.motorHistory, action.payload.motorData]}
    case SAVE_TRIP_SUCCESS:
      return defaultState;
    default:
      return state;
  }
};
