import Axios from "axios"
import { showToastMessage } from "../utility/utilityActions"
import { GET_TEAM , GET_ALL_TEAMS,ADD_TEAM_MEMBER } from "./teamConstants"

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
  export const getTeam = (teamId,projectId, callback) => async (dispatch) => {
    try {
     
        let response = await Axios.get(`team/${teamId}`)
      //  sessionStorage.setItem('team_id', teamId)
      //  sessionStorage.setItem('project_id', projectId)


        dispatch({
          type:GET_TEAM,
          payload: response.data.data
        })
      callback()
      
    } catch (e) {
      if (e.response && e.response.data) {
        dispatch(showToastMessage(e.response.data.message))
  
      }
    }
  }

  export const getAllTeams = (accountId) => async (dispatch) => {
    try {
      let response = await Axios.get(`/team/account-teams/${accountId}`, {
        config: {
          handlerEnabled: true
        }
      })
      dispatch({
        type:GET_ALL_TEAMS,
        payload: response.data.data
      })
    } catch (e) {
      if (e.response && e.response.data) {
        dispatch(showToastMessage(e.response.data.message))
  
      }
    }
  }
  export const addNewTeamMember = (teamObj) => async (dispatch) => {
    try {
      let response = await Axios.post(`team/member`,teamObj, {
        config: {
          handlerEnabled: true
        }
      })
      dispatch({
        type:ADD_TEAM_MEMBER,
        payload: response.data.data
      })
    } catch (e) {
      if (e.response && e.response.data) {
        dispatch(showToastMessage(e.response.data.message))
  
      }
    }
  }