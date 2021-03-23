import { ADD_COMMENT, GET_ASSET_DETAILS, GET_COMMENTS } from "./assetConstants"

let initialState = null

let assetReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        // case GET_ASSET_DETAILS:
        // return {...state, asset:payload}
        case GET_ASSET_DETAILS:
            return { ...state, asset: payload }

        case ADD_COMMENT:
            return { ...state, comments: payload }
        case GET_COMMENTS:
            return { ...state, comments: payload }

        default:
            return state
    }

}
export default assetReducer