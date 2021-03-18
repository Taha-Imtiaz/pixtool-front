import { LOGOUT, SET_CURRENT_USER, SET_LOGGEDIN_USER } from "./userConstants"

let initialState = {
    user: null
}
let userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_CURRENT_USER:
            return { ...state, user: payload }

        case SET_LOGGEDIN_USER:
            return { ...state, user: payload }
        case LOGOUT:
            return initialState
        default:
            return state
    }

}
export default userReducer