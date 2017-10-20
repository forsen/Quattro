import { DOWN_STORSEIL, UP_STORSEIL } from '../actions/storseil'
import { DOWN_FORSEIL, UP_FORSEIL } from '../actions/forseil'
import { MOTOR_START, MOTOR_STOP } from '../actions/motor'
import { FORSEIL_HISTORY, MOTOR_HISTORY, STORSEIL_HISTORY, TRIP_START } from '../actions/trip'

const shouldAddStartEntries = [
  UP_STORSEIL,
  UP_FORSEIL,
  MOTOR_START,
  TRIP_START
]

const shouldAddEndEntries = [
  FORSEIL_HISTORY,
  MOTOR_HISTORY,
  STORSEIL_HISTORY,
]

export default locationMiddleware = store => next => action => {
  if (shouldAddStartEntries.some((item) => item === action.type)) {
    action.payload.startDate = new Date()
    navigator.geolocation.getCurrentPosition((position) => {
        action.payload.startLocation = {
          longitude: position.coords.longitude,
          latitude: position.coords.latitude
        }
        next(action)
      },
      () => {
        debugger
        next(action)
      })
  } else if (shouldAddEndEntries.some((item) => item === action.type)) {
    debugger;
    action.payload.endDate = new Date()
    navigator.geolocation.getCurrentPosition((position) => {
        action.payload.endLocation = {
          longitude: position.coords.longitude,
          latitude: position.coords.latitude
        }
        next(action)
      },
      () => {
        next(action)
      })
  } else {
    next(action)
  }

}