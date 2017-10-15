import { MOTOR_START, MOTOR_STOP, startMotor, stopMotor } from './motor'
import { DOWN_FORSEIL, downForseil, UP_FORSEIL, upForseil } from './forseil'
import { DOWN_STORSEIL, downStorseil, UP_STORSEIL, upStorseil } from './storseil'

export const OPEN_MODAL = 'OPEN_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'
export const SET_TRIP_DISTANCE = 'SET_TRIP_DISTANCE'

export const openModal = (action) => ({
  type: OPEN_MODAL,
  payload: {
    action
  }
})

export const setTripDistance = (distance) => ({
  type: SET_TRIP_DISTANCE,
  payload: {
    distance
  }
})

export const closeModal = (action) => dispatch => {
  dispatch({type: CLOSE_MODAL})

  switch(action){
    case MOTOR_START:
      dispatch(startMotor())
      break
    case MOTOR_STOP:
      dispatch(stopMotor())
      break
    case UP_FORSEIL:
      dispatch(upForseil())
      break
    case DOWN_FORSEIL:
      dispatch(downForseil())
      break
    case UP_STORSEIL:
      dispatch(upStorseil())
      break
    case DOWN_STORSEIL:
      dispatch(downStorseil())
      break
    default:
      break
  }
}
