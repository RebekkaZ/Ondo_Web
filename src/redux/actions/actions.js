import { getRoomCondition, getAcSetting, setAcSetting } from "../../apiCalls"

export const LOAD_ROOMCONDITION_SUCCESS = "LOAD_ROOMCONDITION_SUCCESS";
export const LOAD_ACSETTING_SUCCESS = "LOAD_ACSETTING_SUCCESS";
export const CHANGE_ACSETTING_SUCCESS = "CHANGE_ACSETTING_SUCCESS";

export function loadRoomConditionSucecess(roomCondition) {
    return { type: LOAD_ROOMCONDITION_SUCCESS, roomCondition }
}

export function loadRoomCondition(id) {
    return function (dispatch) {
        return getRoomCondition(id).then(roomCondition => {
            dispatch(loadRoomConditionSucecess(roomCondition));
        }).catch(error => {
            throw error;
        })
    }
}

export function loadAcSettingSuccess(acSetting) {
    return { type: LOAD_ACSETTING_SUCCESS, acSetting }
}

export function loadAcSetting(id) {
    return function (dispatch) {
        return getAcSetting(id).then(acSetting => {
            dispatch(loadAcSettingSuccess(acSetting));
        }).catch(error => {
            throw error;
        })
    }
}

export function changeAcSettingSuccess(acSetting) {
    return { type: CHANGE_ACSETTING_SUCCESS, acSetting }
}

export function changeAcSetting(id, acSetting) {
    return function (dispatch) {
        return setAcSetting(id, acSetting).then(() => {
            dispatch(changeAcSettingSuccess(acSetting));
        }).catch(error => {
            throw error;
        })
    }
}