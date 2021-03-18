import Axios from "axios"
import { showToastMessage } from "../utility/utilityActions"
import { GET_PROJECTS,GET_PROJECT, ADD_PROJECT } from "./projectConstants"

// get all projects of particular team
export const getProjects = (teamId) => async (dispatch) => {
    try {
        let response = await Axios.get(`team/${teamId}`)
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

// get all assets of  single project by passing projectId(asset of type file)
export const getProject = (projectId) => async (dispatch) => {
    try {
        let response = await Axios.get(`project/${projectId}`)
        console.log(response)
        let projectObj = {
           parentId: projectId,
            ...response.data.data
        }
        dispatch({
            type:GET_PROJECT,
            payload: projectObj
        })
    } catch (e) {
        if (e.response && e.response.data) {
            dispatch(showToastMessage(e.response.data.message))
      
          }
    }
}
// get all assets of single project by passing assetid(asset of type folder)

export const getAssets = (parentId) => async (dispatch) => {
    try {
        let response = await Axios.get(`child/${parentId}`)
       
        let projectObj = {
            parentId: parentId,
            resources: response.data.data
         }
         console.log(projectObj)
        dispatch({
            type:GET_PROJECT,
            payload: projectObj
        })
    } catch (e) {
        if (e.response && e.response.data) {
            dispatch(showToastMessage(e.response.data.message))
      
          }
    }
}

// add new Project to the team whose teamId is passed

export const addProject = (teamId, data,callback) => async (dispatch) => {
    try {
        let response =  await Axios.post(`project/${teamId}`, data , {
            config: {
              handlerEnabled: true
            }
          })
        // update app's state
        dispatch({
            type: ADD_PROJECT,
            payload:response.data.data
        })

        dispatch(showToastMessage(response.data.message))
        if(response.status === 202) {
            callback()
        }
    } catch (e) {
        if (e.response && e.response.data) {
            dispatch(showToastMessage(e.response.data.message))
      
          }
    }
}