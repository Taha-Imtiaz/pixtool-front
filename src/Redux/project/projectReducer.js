import { ADD_PROJECT, GET_PROJECT } from "./projectConstants"

var initialState = null

let projectReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        
        case GET_PROJECT:
            return {...state,...payload }
        case ADD_PROJECT:
            
            return {...state, project: payload}

        default:
            return state
    }
}
export default projectReducer