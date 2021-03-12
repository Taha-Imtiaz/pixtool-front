import Axios from "axios";
import { showToastMessage } from "../utility/utilityActions";
import {  ACCOUNT } from "./accountConstants";

//get all user project accounts details
export const getAccount = () => async (dispatch) => {
  try {
    // set up headers for user token
    // const config = {
    //   handlerEnabled: true
    // };

    // send request to the server
    const response = await Axios.get(`user`, {config : {
      handlerEnabled: true
    }})

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
