import { LOAD_ROOMCONDITION_SUCCESS } from '../actions/actions'

const initialState = {
    roomConditions:[
        {
            id: "",
            temperature: 0,
            humidity: 0
        }
    ]
}

export function roomConditionReducer(state = initialState, action) {
    switch(action.type){
        case LOAD_ROOMCONDITION_SUCCESS:
            return Object.assign({}, state, {
                roomConditions: state.roomConditions.concat(action.roomCondition)
              });            
                
        default:
            return state;
    }
}