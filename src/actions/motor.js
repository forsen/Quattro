import { addToMotorHistory } from './trip'

export const MOTOR_START = 'MOTOR_START';
export const MOTOR_STOP = 'MOTOR_STOP';

export const startMotor = () => (dispatch, getState) => {
  const {people} = getState();
  dispatch({
    type: MOTOR_START,
    payload: {
      startDate: new Date(),
      people
    }
  })
}

export const stopMotor = (motorData) => dispatch => {
  const {on: deleted, ...newState} = motorData
  newState.endDate = new Date();
  dispatch(addToMotorHistory(newState));
  dispatch({
    type: MOTOR_STOP
  })
}