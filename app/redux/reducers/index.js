import { combineReducers } from 'redux'
/* import actions */
import currencies from './currencies'
import themes from './themes' 

export default combineReducers({
    currencies,
    themes,
})