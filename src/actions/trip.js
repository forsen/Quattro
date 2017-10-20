import { saveTrip } from './api'

export const TRIP_START = 'TRIP_START'
export const MOTOR_HISTORY = 'MOTOR_HISTORY'
export const FORSEIL_HISTORY = 'FORSEIL_HISTORY'
export const STORSEIL_HISTORY = 'STORSEIL_HISTORY'

export const startTrip = () => ({
  type: TRIP_START,
  payload: {}
})

export const endTrip = (trip) => (dispatch) => dispatch(saveTrip(trip))

export const addToMotorHistory = (motorData) => {
  return {
    type: MOTOR_HISTORY,
    payload: {
      ...motorData
    }
  }
}

export const addToForseilHistory = (forseilData) => {
  return {
    type: FORSEIL_HISTORY,
    payload: {
      ...forseilData
    }
  }
}

export const addToStorseilHistory = (storseilData) => {
  return {
    type: STORSEIL_HISTORY,
    payload: {
      ...storseilData
    }
  }
}