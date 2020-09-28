import {asyncActionError, asyncActionFinish, asyncActionStart} from '../async/asyncReducer'

export const INCEREMENT = 'INCEREMENT'

export function increment(num){
return async function(dispatch){
    dispatch(asyncActionStart());
    try{
        dispatch({type: INCEREMENT, payload: num})
        dispatch(asyncActionFinish())
    }catch(error){
        dispatch(asyncActionError())
    }
}
}

const initialState = {
  data: 4,
}

export default function testReducer(state = initialState, action) {
    switch(action.type){
        case INCEREMENT:
            return {
            ...state,
            data: state.data + action.payload 
            }
        default:
          return  state
    }

}