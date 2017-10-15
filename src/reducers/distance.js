import { CLOSE_MODAL, OPEN_MODAL, SET_TRIP_DISTANCE, TOGGLE_MODAL } from '../actions/distance'

const defaultValue = {
  visible: '',
  value: '0'
}

export default distanceReducer = (state = defaultValue, action) => {
  switch(action.type) {
    case OPEN_MODAL:
      return {...state, visible: action.payload.action}
    case CLOSE_MODAL:
      return {...state, visible: ''}
    case SET_TRIP_DISTANCE:
      return {...state, value: action.payload.distance}
    default:
      return state
  }
}