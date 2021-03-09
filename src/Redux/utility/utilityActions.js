import { HIDE_LOADER, SHOW_LOADER, SHOW_TOAST_MESSAGE } from "./utilityConstants";

export const showToastMessage = (message) => ({
    type: SHOW_TOAST_MESSAGE,
    payload: message
})

export const showLoader = () => ({
type: SHOW_LOADER
})
export const hideLoader = () => ({
type: HIDE_LOADER
})