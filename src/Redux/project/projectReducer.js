import { GET_PROJECT } from "./projectConstants"

var initialState = null

let projectReducer = (state = initialState, {type, payload})=> {
    switch (type) {
        case GET_PROJECT:
            
            return {...state, projectList: payload}
    
        default:
            return state
    }
}
export default projectReducer