import { ADD_PERSON, REMOVE_ALL_PERSONS, REMOVE_PERSON } from '../actions/people'

const defaultState = []

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PERSON:
      return {...state, ...action.payload.person}
    case REMOVE_PERSON:
      return state.filter((p) => p !== action.payload.person)
    case REMOVE_ALL_PERSONS:
      return []
    default:
      return state
  }
}