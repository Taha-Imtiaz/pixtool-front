import Axios from "axios"
import { GET_ASSET_DETAILS } from "./assetConstants"

export const getAssetDetails = (assetId) => async (dispatch) => {
    let response =  await Axios.get(`asset/${assetId}`)
    console.log(response)
    dispatch({
        type: GET_ASSET_DETAILS,
        payload: response.data.data
    })
}