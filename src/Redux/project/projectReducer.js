import { GET_PROJECT, SET_PROJECT_ID } from "./projectConstants"

var initialState = null

let projectReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case GET_PROJECT:
            return { ...state, ...payload }
case SET_PROJECT_ID:
    return { projectId: payload}
        default:
            return state
    }
}
export default projectReducer