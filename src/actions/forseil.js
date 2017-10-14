import { addToForseilHistory } from './trip'

export const UP_FORSEIL = 'UP_FORSEIL'
export const DOWN_FORSEIL = 'DOWN_FORSEIL'

export const upForseil = () => (dispatch, getState) => {
  const {people} = getState()
  dispatch({
    type: UP_FORSEIL,
    payload: {
      startDate: new Date(),
      people
    }
  })
}

export const downForseil = (forseilData) => dispatch => {
  const {up: deleted, ...newState} = forseilData
  newState.endDate = new Date();
  dispatch(addToForseilHistory(newState));
  dispatch({
    type: DOWN_FORSEIL
  })
}