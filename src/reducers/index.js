import { combineReducers } from 'redux'

import api from './api'
import motor from './motor'
import people from './people'
import trip from './trip'

export default combineReducers({api, motor, people, trip})
