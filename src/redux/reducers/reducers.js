import { LOAD_ROOMCONDITION_SUCCESS, LOAD_ACSETTING_SUCCESS, CHANGE_ACSETTING_SUCCESS } from '../actions/actions'

export const initialState = {
    roomConditions: [
        {}
    ],
    acSettings: [
        {}
    ]
}

export function roomConditionReducer(state = initialState.roomConditions, action) {
    switch (action.type) {
        case LOAD_ROOMCONDITION_SUCCESS:
            if (state.find(roomCondition => roomCondition.id === action.roomCondition.id) === undefined) {
                return [...state, { ...action.roomCondition }];
            } else {
                return state.map(
                    roomCondition => roomCondition.id === action.roomCondition.id ? action.roomCondition : roomCondition);
            }
        default:
            return state;
    }
}

export function acSettingReducer(state = initialState.acSettings, action) {
    switch (action.type) {
        case LOAD_ACSETTING_SUCCESS:
            if (state.find(acSetting => acSetting.id === action.acSetting.id) === undefined) {
                return [...state, { ...action.acSetting }];
            } else {
                return state.map(
                    acSetting => acSetting.id === action.acSetting.id ? action.acSetting : acSetting);
            }
        case CHANGE_ACSETTING_SUCCESS:
            return state.map(
                acSetting => acSetting.id === action.acSetting.id ? action.acSetting : acSetting);
        default:
            return state;
    }
}