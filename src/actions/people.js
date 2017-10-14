export const ADD_PERSON = 'ADD_PERSON'
export const REMOVE_PERSON = 'REMOVE_PERSON'
export const REMOVE_ALL_PERSONS = 'REMOVE_ALL_PERSONS'

export const addPerson = (person) => ({
  type: ADD_PERSON,
  payload: {
    person
  }
})

export const removePerson = (person) => ({
  type: REMOVE_PERSON,
  payload: {
    person
  }
})

export const removeAllPersons = () => ({
  type: REMOVE_ALL_PERSONS
})

