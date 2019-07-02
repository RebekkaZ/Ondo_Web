import { combineReducers } from 'redux';
import { roomConditionReducer, acSettingReducer } from './reducers'

const rootReducer = combineReducers({
    roomConditions: roomConditionReducer,
    acSettings: acSettingReducer
})

export default rootReducer;