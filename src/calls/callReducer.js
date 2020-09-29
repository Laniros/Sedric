
const initialState = {
    calls: [],
};

export default function callReducer(state = initialState, {type, payload}) {
    switch (type) {
        case "ADD":
            return {
                ...state,
                calls: [...state.calls, payload],
            };
        case 'SHOW':
            return {
                ...state,
                calls: [...state.calls, payload]
            };
        case 'FETCH':
            return {
                ...state,
                calls: payload
            };
        case 'FETCH_ONE':
            return {
                ...state,
                call: payload
            };
        default:
            return state;
    }
}
