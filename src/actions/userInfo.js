export const EDIT_ISLOGIN = "EDIT_ISLOGIN";

export function editIsLogin(val) {
    return {
        type: EDIT_ISLOGIN,
        payload: val
    }
}