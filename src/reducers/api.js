import { SAVE_TRIP_ERROR, SAVE_TRIP_SUCCESS, SIGN_IN_ERROR } from '../actions/api'

const defaultState = {
  SIGN_IN_ERROR: false,
  SAVE_TRIP_SUCCESS: false,
  SAVE_TRIP_ERROR: false
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case SIGN_IN_ERROR:
      return {...state, SIGN_IN_ERROR: true }
    case SAVE_TRIP_SUCCESS:
      return {...state, SAVE_TRIP_SUCCESS: true}
    case SAVE_TRIP_ERROR:
      return {...state, SAVE_TRIP_ERROR: true}
    default:
      return state;
  }
}