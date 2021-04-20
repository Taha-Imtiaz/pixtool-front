import { GET_REVIEW_PROJECT_ASSETS, REVIEW_ASSET } from "./reviewConstants"

let initialState = null

let reviewReducer = (state = initialState, {type, payload}) => {
switch (type) {
    case REVIEW_ASSET:
        return {...state, ...payload}
       
    case GET_REVIEW_PROJECT_ASSETS:
    return {...state, assets: payload}
    default:
       return state
}
}
export default reviewReducer