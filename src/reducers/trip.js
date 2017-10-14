import { FORSEIL_HISTORY, MOTOR_HISTORY, STORSEIL_HISTORY, TRIP_START } from '../actions/trip'
import { SAVE_TRIP_SUCCESS } from '../actions/api'

const defaultState = {
  active: false,
  motorHistory: [],
  storseilHistory: [],
  forseilHistory: []
};

export default (state = defaultState, action) => {
  debugger;
  switch (action.type) {
    case TRIP_START:
      return { ...state, ...action.payload, active: true };
    case MOTOR_HISTORY:
      return { ...state, motorHistory: [...state.motorHistory, action.payload.motorData]}
    case STORSEIL_HISTORY:
      return { ...state, storseilHistory: [...state.storseilHistory, action.payload.storseilData]}
    case FORSEIL_HISTORY:
      return { ...state, forseilHistory: [...state.forseilHistory, action.payload.forseilData]}
    case SAVE_TRIP_SUCCESS:
      return defaultState;
    default:
      return state;
  }
};
