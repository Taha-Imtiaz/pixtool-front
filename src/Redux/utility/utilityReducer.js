import { HIDE_LOADER, SHOW_LOADER, SHOW_TOAST_MESSAGE } from "./utilityConstants";

let initialState = {
    showMessage:'',
    numberOfRequests: 0
}
var currentState;
const utilityReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SHOW_TOAST_MESSAGE:
            
            return {...state, showMessage: payload}
    
            case SHOW_LOADER:
             currentState = { ...state };
                 return {
                    ...state,
                    numberOfRequests: ++currentState.numberOfRequests
                }
                case HIDE_LOADER:
                 currentState = { ...state };

                    return {
                        ...state,
                        numberOfRequests: --currentState.numberOfRequests
                    }

        default:
            return state
    }
}
export default utilityReducer