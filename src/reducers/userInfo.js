import { ADD_USERINFO } from '../actions/userInfo';

// 用户信息
export function userInfo(state = null, action) {
    switch (action.type) {
        case ADD_USERINFO: {
            return state = action.payload;
        }
        default: {
            return state;
        }
    }
}