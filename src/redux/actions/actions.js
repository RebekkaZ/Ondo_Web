import { getRoomCondition } from "../../apiCalls"

export const LOAD_ROOMCONDITION_SUCCESS = "LOAD_ROOMCONDITION_SUCCESS";

export function loadRoomConditionSucecess(roomCondition){
    return {type: LOAD_ROOMCONDITION_SUCCESS, roomCondition}
}

export function loadRoomCondition(id){
    return function(dispatch){
        return getRoomCondition(id).then(roomCondition =>{
            dispatch(loadRoomConditionSucecess(roomCondition));
        }).catch(error=>{
            throw error;
        })
    }
}