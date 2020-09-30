import {FETCH} from "./callConstant";

export function loadData(calls){
    return{
        type: FETCH,
        payload: calls
    }
}