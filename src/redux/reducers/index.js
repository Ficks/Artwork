import { combineReducers } from 'redux';
import { userInfo } from './userInfo';

const allReducers = {
    userInfo
}

const rootReducers = combineReducers(allReducers);
export default rootReducers;
