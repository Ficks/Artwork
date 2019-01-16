import { EDIT_ISLOGIN } from '../actions/userInfo';

export function isLogin(state = false, action) {
    switch (action.type) {
        case EDIT_ISLOGIN: {
            return state = action.payload;
        }
        default: {
            return state;
        }
    }
}