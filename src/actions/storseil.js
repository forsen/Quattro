import { addToStorseilHistory } from './trip'

export const UP_STORSEIL = 'UP_STORSEIL'
export const DOWN_STORSEIL = 'DOWN_STORSEIL'

export const upStorseil = () => (dispatch, getState) => {
  const {people, distance} = getState()
  dispatch({
    type: UP_STORSEIL,
    payload: {
      startDate: new Date(),
      startTrip: distance.value,
      people
    }
  })
}

export const downStorseil = () => (dispatch, getState) => {
  const { distance, storseil } = getState()
  const {up: deleted, ...newState} = storseil
  newState.endDate = new Date();
  newState.endTrip = distance.value

  dispatch(addToStorseilHistory(newState));
  dispatch({
    type: DOWN_STORSEIL
  })
}