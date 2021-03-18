import { GET_ASSET_DETAILS, UPLOAD_ASSET } from "./assetConstants"

let initialState = null

let assetReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        // case GET_ASSET_DETAILS:
        // return {...state, asset:payload}
        case GET_ASSET_DETAILS:
            return {...state, asset: payload}
    case UPLOAD_ASSET:
        // return {...state, }
        default:
            return state
    }
}
export default assetReducer