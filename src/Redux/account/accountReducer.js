import { ACCOUNT, ADD_PROJECT } from "./accountConstants";

var initialState = null;

let accountReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ACCOUNT:
            return { ...state, account: payload }
            case ADD_PROJECT:
           console.log(payload)

        return  {account:[payload]}
    
        default:
            return state
    }
}
export default accountReducer