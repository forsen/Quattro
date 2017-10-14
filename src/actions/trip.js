import { saveTrip } from './api'

export const TRIP_START = 'TRIP_START'
export const MOTOR_HISTORY = 'MOTOR_HISTORY'

export const startTrip = () => ({
  type: TRIP_START,
  payload: {
    startDate: new Date()
  }
})

export const endTrip = (trip) => (dispatch) => dispatch(saveTrip(trip))

export const addToMotorHistory = (motorData) => {
  return {
    type: MOTOR_HISTORY,
    payload: {
      motorData
    }
  }
}