import { combineReducers } from 'redux'

import api from './api'
import forseil from './forseil'
import motor from './motor'
import people from './people'
import storseil from './storseil'
import trip from './trip'

export default combineReducers({api, forseil, motor, people, storseil, trip})
