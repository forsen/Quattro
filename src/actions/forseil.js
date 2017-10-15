import { addToForseilHistory } from './trip'

export const UP_FORSEIL = 'UP_FORSEIL'
export const DOWN_FORSEIL = 'DOWN_FORSEIL'

export const upForseil = () => (dispatch, getState) => {
  const {people, distance} = getState()
  dispatch({
    type: UP_FORSEIL,
    payload: {
      startDate: new Date(),
      people,
      startTrip: distance.value
    }
  })
}

export const downForseil = () => (dispatch, getState) => {
  const {distance, forseil} = getState()
  const {up: deleted, ...newState} = forseil
  newState.endDate = new Date()
  newState.endTrip = distance.value
  dispatch(addToForseilHistory(newState))
  dispatch({
    type: DOWN_FORSEIL
  })
}