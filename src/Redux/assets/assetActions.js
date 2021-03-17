import Axios from "axios"
import { GET_ASSET_DETAILS } from "./assetConstants"

export const getAllAssets = (projectId) => async (dispatch) => {
    try {
        
    } catch (error) {
        console.log(error)
    }
}

export const getAssetDetails = (assetId) => async (dispatch) => {
    let response = await Axios.get(`asset/${assetId}`)
    dispatch({
        type: GET_ASSET_DETAILS,
        payload: response.data.data
    })
}



export const uploadAsset = (data) => async (dispatch) => {
    let response = await Axios.post(`asset`, data, {
        config: {
            handlerEnabled: true
        }
    })
    console.log(response)
    // dispatch({
    //     type: GET_ASSET_DETAILS,
    //     payload: response.data.data
    // })
}