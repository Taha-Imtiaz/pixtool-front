import Axios from 'axios';
import { GET_PROJECT } from '../project/projectConstants';
import { showToastMessage } from '../utility/utilityActions';
import { GET_ASSET_DETAILS, ADD_COMMENT, GET_COMMENTS, DELETE_COMMENT, GET_LINK, DELETE_ASSET, DOWNLOAD_ASSET } from './assetConstants';

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


// For Getting The Comment Details From Backend
export const getCommentDetails = (assetId) => async (dispatch) => {
    try {
        let response = await Axios.get(`comment/${assetId}`)
        dispatch({
            type: GET_COMMENTS,
            payload: response.data.data
        })
    } catch (e) {
        if (e.response && e.response.data) {
            dispatch(showToastMessage(e.response.data.message))

        }
    }
}


// For Posting New Reply Comment To The Backend
export const addReply = (data, assetId) => async (dispatch) => {

    try {
        let response = await Axios.post(`comment/reply/${assetId}`, data, {
            config: {
                handlerEnabled: true
            }
        })
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


// For Deleting Comment From The Backend
export const deleteComments = (assetId, commentId) => async (dispatch) => {

    try {
        let response = await Axios.delete(`comment/${assetId}/${commentId}`, {
            config: {
                handlerEnabled: true
            }
        })
        dispatch({
            type: DELETE_COMMENT,
            payload: response.data.data
        })
    } catch (e) {
        if (e.response && e.response.data) {
            dispatch(showToastMessage(e.response.data.message))
        }
    }
}


// For Posting Video/ Asset Description To The Backend
export const addDescription = (data, assetId) => async (dispatch) => {

    try {
        let response = await Axios.put(`/asset/${assetId}`, data, {
            config: {
                handlerEnabled: true
            }
        })
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


// // For Getting Video/ Asset Description From Backend
// export const getDescription = (assetId) => async (dispatch) => {
//     try {
//         let response = await Axios.get(`/asset/${assetId}`)
//         dispatch({
//             type: GET_DESCRIPTION,
//             payload: response.data.data
//         })
//     } catch (e) {
//         if (e.response && e.response.data) {
//             dispatch(showToastMessage(e.response.data.message))

//         }
//     }
// }
export const getLink = (assetIdObj) => async (dispatch) => {
    try {
        let response = await Axios.post('review', assetIdObj)
        dispatch({
            type: GET_LINK,
            payload: response.data.data
        })
    } catch (e) {
        if (e.response && e.response.data) {
            dispatch(showToastMessage(e.response.data.message))

        }
    }
}


// For Deleting Asset From The Backend
export const deleteAsset = (assetId) => async (dispatch) => {
    console.log(assetId)
    try {
        let response = await Axios.delete(`asset/${assetId}`, {
            config: {
                handlerEnabled: true
            }
        })
        console.log(response);
        dispatch({
            type: DELETE_ASSET,
            payload: response.data.data
        })
    } catch (e) {
        if (e.response && e.response.data) {
            dispatch(showToastMessage(e.response.data.message))
        }
    }
}
// download Asset
export const downloadFile = (assetId) => async (dispatch) => {
    try {
        let response = await Axios.get(`asset/download/video/${assetId}`, {
            config: {
                handlerEnabled: true
            }
        })
        console.log( response.data.url)
        // Convert the data into 'blob'
        const blob = response.data.url
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `test.mp4`);
        document.body.appendChild(link);
        link.click();

        // var video = document.getElementById('video');
        // var a = document.createElement("a");
        // const a = document.createElement('a');
        // document.body.appendChild(a);
        // a.style = "display: none";
        // a.href = response.data.url;
        // a.download = 'video.mp4';
        // a.click();
        dispatch({
            type: DOWNLOAD_ASSET,
            payload: response.data.data
        })
    } catch (e) {
        if (e.response && e.response.data) {
            dispatch(showToastMessage(e.response.data.message))
        }
    }
}