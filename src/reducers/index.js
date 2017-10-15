import { combineReducers } from 'redux'

import api from './api'
import forseil from './forseil'
import motor from './motor'
import people from './people'
import storseil from './storseil'
import trip from './trip'
import distance from './distance'

export default combineReducers({api, distance, forseil, motor, people, storseil, trip})
