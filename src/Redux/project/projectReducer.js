import { ADD_PROJECT, GET_PROJECT, GET_PROJECTS } from "./projectConstants"

var initialState = null

let projectReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_PROJECTS:

            return { ...state, projectList: payload }
        case GET_PROJECT:
            return { ...state, project: payload }
        case ADD_PROJECT:
            
            return {...state, project: payload}

        default:
            return state
    }
}
export default projectReducer