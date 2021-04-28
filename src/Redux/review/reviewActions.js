
import Axios from "axios"
import { showToastMessage } from "../utility/utilityActions"
import { GET_REVIEW_PROJECT_ASSETS, REVIEW_ASSET } from "./reviewConstants"

export const getReviewAssets = (id) => async (dispatch) => {
    try {
        let response = await Axios.get(`review/${id}`)
        console.log(response)

        //  update app state
        dispatch({
            type: REVIEW_ASSET,
            payload: response.data.data
        })
       
    } catch (e) {
        if (e.response && e.response.data) {
            dispatch(showToastMessage(e.response.data.message))

        }
    }
}
// get all assets of single project by passing assetid(asset of type folder)

export const getReviewProjectAssets = (assetId, assetObj) => async (dispatch) => {
    try {
        let response = await Axios.post(`child/${assetId}`, assetObj)
       
        dispatch({
            type: GET_REVIEW_PROJECT_ASSETS,
            payload: response.data.data
        })
    } catch (e) {
        if (e.response && e.response.data) {
            dispatch(showToastMessage(e.response.data.message))

        }
    }
}