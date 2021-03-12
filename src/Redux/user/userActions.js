
import Axios from "axios"
import { showToastMessage } from "../utility/utilityActions"
import { SET_CURRENT_USER, SET_LOGGEDIN_USER } from "./userConstants"
// set current user in redux store(who is signed up first time)
export const signupUser = (userObj, callback) => async (dispatch) => {
    try {
        console.log(userObj)
        let response = await Axios.post(`user`, userObj)
        console.log(response.data)

        // data successfuly send to the server

        //save token in local storage
        localStorage.setItem("pixtool-token", response.data.token);

        //show toast notification(by updating utilities state)
        dispatch(showToastMessage(response.data.message))

        // update app state
        dispatch({
            type: SET_CURRENT_USER,
            payload: response.data.data
        })
        // navigate user to home page
        callback()


    } catch (e) {
        if (e.response && e.response.data) {
            dispatch(showToastMessage(e.response.data.message))

        }
    }
}
// set login user request to server(loggedin the user and set the data in redux store)
export const loginUser = (userObj, callback) => async (dispatch) => {
    try {
        console.log(userObj)
        let response = await Axios.post(`user/login`, userObj)
        console.log(response.data)

        // data successfuly send to the server

        //save token in local storage
        localStorage.setItem("pixtool-token", response.data.token);

        //show toast notification (by updating utilities state in redux)
        dispatch(showToastMessage(response.data.message))


        // update app state
        dispatch({
            type: SET_LOGGEDIN_USER,
            payload: response.data.data
        })
        // navigate user to home page
        callback()



    } catch (e) {
        if (e.response && e.response.data) {
            dispatch(showToastMessage(e.response.data.message))

        }
    }
}

