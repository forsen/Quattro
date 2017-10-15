import { addToMotorHistory } from './trip'

export const MOTOR_START = 'MOTOR_START';
export const MOTOR_STOP = 'MOTOR_STOP';

export const startMotor = () => (dispatch, getState) => {
  const {people, distance} = getState();
  dispatch({
    type: MOTOR_START,
    payload: {
      startDate: new Date(),
      startTrip: distance.value,
      people
    }
  })
}

export const stopMotor = () => (dispatch, getState) => {
  const { distance, motor } = getState()
  const {on: deleted, ...newState} = motor
  newState.endDate = new Date();
  newState.endTrip = distance.value
  dispatch(addToMotorHistory(newState));
  dispatch({
    type: MOTOR_STOP
  })
}