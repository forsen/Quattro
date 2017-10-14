import { addToStorseilHistory } from './trip'

export const UP_STORSEIL = 'UP_STORSEIL'
export const DOWN_STORSEIL = 'DOWN_STORSEIL'

export const upStorseil = () => (dispatch, getState) => {
  const {people} = getState()
  dispatch({
    type: UP_STORSEIL,
    payload: {
      startDate: new Date(),
      people
    }
  })
}

export const downStorseil = (storseilData) => dispatch => {
  const {up: deleted, ...newState} = storseilData
  newState.endDate = new Date();
  dispatch(addToStorseilHistory(newState));
  dispatch({
    type: DOWN_STORSEIL
  })
}