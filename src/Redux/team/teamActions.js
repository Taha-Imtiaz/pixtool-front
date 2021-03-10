import Axios from "axios"
import { showToastMessage } from "../utility/utilityActions"
import { GET_TEAMS } from "./teamConstants"

export const getTeams = (accountId) => async (dispatch) => {
    try {
     
        let response = await Axios.get(`/account/${accountId}`)
        console.log(response)
        dispatch({
          type:GET_TEAMS,
          payload: response.data.data.teams
        })
      
    } catch (e) {
      if (e.response && e.response.data) {
        dispatch(showToastMessage(e.response.data.message))
  
      }
    }
  }