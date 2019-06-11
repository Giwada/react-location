import {
    ERRORS,
    REMOVE_ERRORS
} from '../actions/ActionTypes';

const firstState = {
    message: {}
}

export default function(state = firstState, action){
    switch(action.type){
        case ERRORS:
            return {
                message: action.payload
            };
        case REMOVE_ERRORS:
            return {
                message: {}
            };
        default:
            return state;
    }
}