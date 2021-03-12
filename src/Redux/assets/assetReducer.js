import { GET_ASSETS } from "./assetConstants"

let initialState = null

let assetReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        // case GET_ASSETS:
        //     return {...state, assetList: payload}
            // break;
    
        default:
            return state
    }
}
export default assetReducer