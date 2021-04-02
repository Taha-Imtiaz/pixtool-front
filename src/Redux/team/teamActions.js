import Axios from "axios"
import { showToastMessage } from "../utility/utilityActions"
import { GET_TEAMS } from "./teamConstants"

  // get single team data
// get all projects of particular team
// export const getTeams = (teamId) => async (dispatch) => {
//   try {
//       let response = await Axios.get(`team/${teamId}`)
//       dispatch({
//           type: GET_TEAMS,
//           payload: response.data.data
//       })
//   } catch (e) {
//       if (e.response && e.response.data) {
//           dispatch(showToastMessage(e.response.data.message))
    
//         }
//   }
// }
  export const getTeamData = (teamId,projectId, callback) => async (dispatch) => {
    try {
     
        let response = await Axios.get(`team/${teamId}`)
      //  sessionStorage.setItem('team_id', teamId)
      //  sessionStorage.setItem('project_id', projectId)


        dispatch({
          type:GET_TEAMS,
          payload: response.data.data
        })
      callback()
      
    } catch (e) {
      if (e.response && e.response.data) {
        dispatch(showToastMessage(e.response.data.message))
  
      }
    }
  }