import { ACCOUNT } from "./accountConstants";

var initialState = null;

let accountReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ACCOUNT:
            return { ...state, account: payload }
      
        default:
            return state
    }
}
export default accountReducer