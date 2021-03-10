import Axios from "axios"
import { GET_PROJECT } from "./projectConstants"

export const getProject = (teamId) => async (dispatch) => {
    try {
        let response = await Axios.get(`/team/${teamId}`)
        console.log(response)
        dispatch({
            type: GET_PROJECT,
            payload: response.data.data
        })
    } catch (e) {
        if (e.response && e.response.data) {
            dispatch(showToastMessage(e.response.data.message))
      
          }
    }
}