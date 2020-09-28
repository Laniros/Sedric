import { Call } from "@material-ui/icons";
import { asyncActionError, asyncActionFinish, asyncActionStart } from "../async/asyncReducer";
import { FETCH_ONE, SHOW ,ADD, FETCH} from "./callConstant";

export function showCalls(call){
return{
    type: SHOW,
    payload: call
}

}

export function loadData(calls){
    return{
        type: FETCH,
        payload: calls
    }
}

export function loadCall(call){
    return{
        type: FETCH_ONE,
        payload: call
    }
}

export function addCall(call){
    return{
        type: ADD,
        payload: call
    }
    
    }