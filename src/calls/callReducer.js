import {calls} from './callfile'

const initialState = {
  calls: calls,
};

export default function callReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "ADD":
      return {
        ...state,
        calls: [...state.calls, payload],
      };
      case 'SHOW':
          return{
          ...state,
          calls: [...state.calls, payload]
          }
        case 'FETCH':
          return{
            ...state,
            calls: payload
          }
    default:
      return state;
  }
}
