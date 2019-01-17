export const ADD_USERINFO = "ADD_USERINFO";

export function addUserInfo(val) {
    return {
        type: ADD_USERINFO,
        payload: val
    }
}