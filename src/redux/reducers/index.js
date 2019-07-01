import { combineReducers } from 'redux';
import { roomConditionReducer } from './reducers'

const rootReducer = combineReducers({
    roomConditions: roomConditionReducer
})

export default rootReducer;