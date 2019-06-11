import { combineReducers } from 'redux';

import userReducer from './userReducer';
import errorReducer from './errorReducer';

const reducers = combineReducers({
    user: userReducer,
    error: errorReducer
});

export default reducers