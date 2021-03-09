import { SHOW_TOAST_MESSAGE } from "./utilityConstants";

export const showToastMessage = (message) => ({
    type: SHOW_TOAST_MESSAGE,
    payload: message
})