import { REMOVE_ERRORS } from './ActionTypes';

export const removeError = () => dispatch => {
    dispatch({
        type: REMOVE_ERRORS
    })
};