import { ADD_USERINFO_CODE } from '../types';

// 用户信息
export function userInfo(state = null, action) {
    switch (action.type) {
        case ADD_USERINFO_CODE: {
            return state = action.payload;
        }
        default: {
            return state;
        }
    }
}