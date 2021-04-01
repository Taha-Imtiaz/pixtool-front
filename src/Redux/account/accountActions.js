import Axios from "axios";
import { showToastMessage } from "../utility/utilityActions";
import { ACCOUNT } from "./accountConstants";

//get all teams
export const getAccount = (accountId) => async (dispatch) => {
  try {
   
      let response = await Axios.get(`account/${accountId}`)
      dispatch({
        type:ACCOUNT,
        payload: response.data.data.teams
      })
    
  } catch (e) {
    if (e.response && e.response.data) {
      dispatch(showToastMessage(e.response.data.message))

    }
  }
}