import axios from "axios"
import { GET_ASSETS } from "./assetConstants"

export const getAssets = (projectId) => async (dispatch) => {
    try {
        let response = await axios.get(`/project/${projectId}`)
        dispatch({
            type: GET_ASSETS,
            payload: response.data.data
        })
    } catch (e) {
        if (e.response && e.response.data) {
            dispatch(showToastMessage(e.response.data.message))
    }
}
}