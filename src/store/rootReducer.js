import {combineReducers} from 'redux';
import asyncReducer from '../async/asyncReducer';
import callReducer from '../calls/callReducer';
import testReducer from '../sandbox/testReducer';
import authReducer from '../auth/authReducer';


const rootReducer = combineReducers({
    test: testReducer,
    calls: callReducer,
    async: asyncReducer,
    auth: authReducer,
});

export default rootReducer