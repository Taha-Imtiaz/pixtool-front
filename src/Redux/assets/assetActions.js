import Axios from "axios";
import { GET_PROJECT } from "../project/projectConstants";
import { showToastMessage } from "../utility/utilityActions";
import {
  GET_ASSET_DETAILS,
  ADD_COMMENT,
  GET_COMMENTS,
  DELETE_COMMENT,
  GET_LINK,
  DELETE_ASSET,
  DOWNLOAD_VIDEO,
} from "./assetConstants";

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
    let response = await Axios.get(`asset/${assetId}`);
    dispatch({
      type: GET_ASSET_DETAILS,
      payload: response.data.data,
    });
  } catch (e) {
    if (e.response && e.response.data) {
      dispatch(showToastMessage(e.response.data.message));
    }
  }
};

export const uploadAsset = (data) => async (dispatch) => {
  try {
    let response = await Axios.post(`asset`, data, {
      config: {
        handlerEnabled: true,
      },
    });
    let projectObj = {
      resources: response.data.data,
    };
    dispatch({
      type: GET_PROJECT,
      payload: projectObj,
    });
  } catch (e) {
    if (e.response && e.response.data) {
      dispatch(showToastMessage(e.response.data.message));
    }
  }
};

// For Posting New Comment To The Backend
export const addComment = (data, assetId) => async (dispatch) => {
  try {
    let response = await Axios.post(`comment/${assetId}`, data, {
      config: {
        handlerEnabled: true,
      },
    });
    dispatch({
      type: ADD_COMMENT,
      payload: response.data.data,
    });
  } catch (e) {
    if (e.response && e.response.data) {
      dispatch(showToastMessage(e.response.data.message));
    }
  }
};

// For Getting The Comment Details From Backend
export const getCommentDetails = (assetId) => async (dispatch) => {
  try {
    let response = await Axios.get(`comment/${assetId}`);
    dispatch({
      type: GET_COMMENTS,
      payload: response.data.data,
    });
  } catch (e) {
    if (e.response && e.response.data) {
      dispatch(showToastMessage(e.response.data.message));
    }
  }
};

// For Posting New Reply Comment To The Backend
export const addReply = (data, assetId) => async (dispatch) => {
  try {
    let response = await Axios.post(`comment/reply/${assetId}`, data, {
      config: {
        handlerEnabled: true,
      },
    });
    dispatch({
      type: ADD_COMMENT,
      payload: response.data.data,
    });
  } catch (e) {
    if (e.response && e.response.data) {
      dispatch(showToastMessage(e.response.data.message));
    }
  }
};

// For Deleting Comment From The Backend
export const deleteComments = (assetId, commentId) => async (dispatch) => {
  try {
    let response = await Axios.delete(`comment/${assetId}/${commentId}`, {
      config: {
        handlerEnabled: true,
      },
    });
    dispatch({
      type: DELETE_COMMENT,
      payload: response.data.data,
    });
  } catch (e) {
    if (e.response && e.response.data) {
      dispatch(showToastMessage(e.response.data.message));
    }
  }
};

// For Posting Video/ Asset Description To The Backend
export const addDescription = (data, assetId) => async (dispatch) => {
  try {
    let response = await Axios.put(`/asset/${assetId}`, data, {
      config: {
        handlerEnabled: true,
      },
    });
    dispatch({
      type: GET_ASSET_DETAILS,
      payload: response.data.data,
    });
  } catch (e) {
    if (e.response && e.response.data) {
      dispatch(showToastMessage(e.response.data.message));
    }
  }
};

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
    let response = await Axios.post("review", assetIdObj);
    dispatch({
      type: GET_LINK,
      payload: response.data.data,
    });
  } catch (e) {
    if (e.response && e.response.data) {
      dispatch(showToastMessage(e.response.data.message));
    }
  }
};

// For Deleting Asset From The Backend
export const deleteAsset = (assetId) => async (dispatch) => {
  console.log(assetId);
  try {
    let response = await Axios.delete(`asset/${assetId}`, {
      config: {
        handlerEnabled: true,
      },
    });
    console.log(response);
    dispatch({
      type: DELETE_ASSET,
      payload: response.data.data,
    });
  } catch (e) {
    if (e.response && e.response.data) {
      dispatch(showToastMessage(e.response.data.message));
    }
  }
};
// downloadVideo
export const downloadVideo = (assetId) => async (dispatch) => {
  try {
    let response = await Axios.get(`asset/download/video/${assetId}`, {
      config: {
        handlerEnabled: true,
      },
    });
    // download video from url
    const url = window.URL.createObjectURL(new Blob([response.data.url]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "video.mp4"); //or any other extension
    document.body.appendChild(link);
    link.click();
    link.remove();// you need to remove that elelment which is created before.
    dispatch({
      type: DOWNLOAD_VIDEO,
      payload: response.data,
    });
  } catch (e) {
    if (e.response && e.response.data) {
      dispatch(showToastMessage(e.response.data.message));
    }
  }
};
