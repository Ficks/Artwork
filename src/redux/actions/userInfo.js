import { ADD_USERINFO_CODE } from '@/redux/types/'


export function ADD_USERINFO(val) {
    console.log(val);
    return {
        type: ADD_USERINFO_CODE,
        payload: val
    }
}