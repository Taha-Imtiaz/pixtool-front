import { SHOW_TOAST_MESSAGE } from "./utilityConstants";

let initialState = {
    showMessage:''
}
const utilityReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SHOW_TOAST_MESSAGE:
            
            return {...state, showMessage: payload}
    
        default:
            return state
    }
}
export default utilityReducer