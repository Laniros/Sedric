import {combineReducers} from 'redux';
import asyncReducer from '../async/asyncReducer';
import callReducer from '../calls/callReducer';
import testReducer from '../sandbox/testReducer';


const rootReducer = combineReducers({
test: testReducer,
calls: callReducer,
async: asyncReducer

})

export default rootReducer