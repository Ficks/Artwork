import { combineReducers } from 'redux';
import { isLogin } from './userInfo';

const allReducers = {
    isLogin
}

const rootReducers = combineReducers(allReducers);
export default rootReducers;
