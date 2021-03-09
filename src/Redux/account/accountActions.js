import Axios from "axios";
import { showToastMessage } from "../utility/utilityActions";
import { ACCOUNT } from "./accountConstants";

//get all user project accounts details
export const getAccount = (token) => async (dispatch) => {
 try {
    // set up headers for user token
  const config = {
    headers: { Authorization: token },
  };
  
  // send request to the server
  const response = await Axios.get(`/user`, config)
  console.log(response)

  // update app's state
  dispatch({
    type: ACCOUNT,
    payload: response.data.data
  })
 } catch (e) {
  if (e.response && e.response.data) {
    dispatch(showToastMessage(e.response.data.message))

  }
 }
}