import {  ADD_TEAM_MEMBER, GET_ALL_TEAMS, GET_TEAM } from "./teamConstants";

var initialState = null

let teamReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_TEAM:

            return { ...state, teamList: payload }
            case GET_ALL_TEAMS:

                return { ...state, teams: payload }
                case ADD_TEAM_MEMBER:

                return { ...state, newTeamMember: payload }
    
        default:
           return state
    }
}
export default teamReducer