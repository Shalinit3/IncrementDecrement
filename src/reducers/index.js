import { combineReducers } from 'redux'
import incDec from './incDec'
import getData from './getData'

const operation = combineReducers({
    incDec, 
    getData
})

export default operation