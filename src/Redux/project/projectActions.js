import Axios from "axios"
import { showToastMessage } from "../utility/utilityActions"
import { GET_PROJECT } from "./projectConstants"

// get all assets of  single project by passing projectId(asset of type file)
export const getProject = (projectId) => async (dispatch) => {
    try {
        let response = await Axios.get(`project/${projectId}`)
        let projectObj = {
            parentId: projectId,
            ...response.data.data
        }

        dispatch({
            type: GET_PROJECT,
            payload: projectObj
        })

    } catch (e) {
        if (e.response && e.response.data) {
            dispatch(showToastMessage(e.response.data.message))

        }
    }
}
// get all assets of single project by passing assetid(asset of type folder)

export const getProjectAssets = (assetId, assetObj) => async (dispatch) => {
    try {
        let response = await Axios.post(`child/${assetId}`, assetObj)
        // console.log("in folder")

        let projectObj = {
            parentId: assetId,
            resources: response.data.data
        }
        dispatch({
            type: GET_PROJECT,
            payload: projectObj
        })
    } catch (e) {
        if (e.response && e.response.data) {
            dispatch(showToastMessage(e.response.data.message))

        }
    }
}


export const deleteProject = (projectId) => async (dispatch) => {
    try {
        let response = await Axios.delete(`project/${projectId}`)

        // let projectObj = {
        //     parentId: assetId,
        //     resources: response.data.data
        // }
        // dispatch({
        //     type: GET_PROJECT,
        //     payload: projectObj
        // })
    } catch (e) {
        if (e.response && e.response.data) {
            dispatch(showToastMessage(e.response.data.message))

        }
    }
}

