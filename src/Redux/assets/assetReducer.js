import {
  ADD_COMMENT,
  GET_ASSET_DETAILS,
  GET_COMMENTS,
  ADD_REPLY,
  DELETE_COMMENT,
  ADD_DESCRIPTION,
  GET_LINK,
  DELETE_ASSET,
  DOWNLOAD_VIDEO,
} from "./assetConstants";

let initialState = null;

let assetReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // case GET_ASSET_DETAILS:
    // return {...state, asset:payload}
    case GET_ASSET_DETAILS:
      return { ...state, asset: payload };

    case ADD_COMMENT:
      return { ...state, comments: payload };

    case GET_COMMENTS:
      return { ...state, comments: payload };

    case ADD_REPLY:
      return { ...state, reply: payload };

    case DELETE_COMMENT:
      return { ...state, comments: payload };

    case ADD_DESCRIPTION:
      return { ...state, description: payload };

    case GET_LINK:
      return { ...state, shareablelink: payload };

    case DELETE_ASSET:
      return { ...state, asset: payload };

    case DOWNLOAD_VIDEO:
        return {...state, downloadVideo: payload}
    default:
      return state;
  }
};
export default assetReducer;
