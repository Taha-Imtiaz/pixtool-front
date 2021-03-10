import { HIDE_LOADER, SHOW_LOADER, SHOW_TOAST_MESSAGE } from "./utilityConstants";

export const showToastMessage = (message) => async (dispatch) => {
    setTimeout(() => {
        dispatch({
            type: SHOW_TOAST_MESSAGE,
            payload: ''
        })
    }, 5000)
    dispatch({
        type: SHOW_TOAST_MESSAGE,
        payload: message
    })
}

export const showLoader = () => ({
    type: SHOW_LOADER
})
export const hideLoader = () => ({
    type: HIDE_LOADER
})