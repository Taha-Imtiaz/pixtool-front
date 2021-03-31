import {  GET_TEAMS } from "./teamConstants";

var initialState = null

let teamReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_TEAMS:

            return { ...state, teamList: payload }
       
    
        default:
           return state
    }
}
export default teamReducer