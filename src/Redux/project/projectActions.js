import Axios from "axios"
import { showToastMessage } from "../utility/utilityActions"
import { GET_PROJECTS,GET_PROJECT } from "./projectConstants"

// get all projects of particular team
export const getProjects = (teamId) => async (dispatch) => {
    try {
        let response = await Axios.get(`team/${teamId}`)
        console.log(response)
        dispatch({
            type: GET_PROJECTS,
            payload: response.data.data
        })
    } catch (e) {
        if (e.response && e.response.data) {
            dispatch(showToastMessage(e.response.data.message))
      
          }
    }
}

// get a single project by passing projectId
export const getProject = (projectId) => async (dispatch) => {
    try {
        let response = await Axios.get(`project/${projectId}`)
        console.log(response.data.data)
        dispatch({
            type:GET_PROJECT,
            payload: response.data.data
        })
    } catch (e) {
        if (e.response && e.response.data) {
            dispatch(showToastMessage(e.response.data.message))
      
          }
    }
}