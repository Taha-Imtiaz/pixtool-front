import Axios from "axios"
import { GET_PROJECT } from "../project/projectConstants"
import { showToastMessage } from "../utility/utilityActions"
import { GET_ASSET_DETAILS, ADD_COMMENT } from "./assetConstants"

// get all assets of  single project (which is in folder) by passing projectId
// export const getAllProjectAssests = (projectId) => async (dispatch) => {
//     try {
//         let response = await Axios.get(`project/${projectId}`)
//         console.log(response.data.data)
//         // let assetsObj = {
//         //     projectId: projectId,
//         //     assets:response.data.data.resources
//         // }
//         let assetObj = {
//             parentId: projectId,
//             assets: response.data.data.resources
//         }
//         dispatch({
//             type:GET_PROJECT_ASSETS,
//             payload: assetObj
//         })
//     } catch (e) {
//         if (e.response && e.response.data) {
//             dispatch(showToastMessage(e.response.data.message))

//           }
//     }
// }

export const getAssetDetails = (assetId) => async (dispatch) => {
    try {
        let response = await Axios.get(`asset/${assetId}`)
        dispatch({
            type: GET_ASSET_DETAILS,
            payload: response.data.data
        })
    } catch (e) {
        if (e.response && e.response.data) {
            dispatch(showToastMessage(e.response.data.message))

        }
    }
}


export const uploadAsset = (data) => async (dispatch) => {

    try {
        let response = await Axios.post(`asset`, data, {
            config: {
                handlerEnabled: true
            }
        })
        let projectObj = {
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


// For Posting New Comment To The Backend
export const addComment = (data, assetId) => async (dispatch) => {

    try {
        let response = await Axios.post(`comment/${assetId}`, data, {
            config: {
                handlerEnabled: true
            }
        })
        console.log(response)
        dispatch({
            type: ADD_COMMENT,
            payload: response.data.data
        })
    } catch (e) {
        if (e.response && e.response.data) {
            dispatch(showToastMessage(e.response.data.message))
        }
    }
}
