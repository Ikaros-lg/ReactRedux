import * as constants from '../constants/index.js';
import status from './status';
import inf from './inf';
import {combineReducers} from 'redux';

const reducer = combineReducers({
   status : status,
   inf : inf 
});

export default reducer;