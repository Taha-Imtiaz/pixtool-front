
import Axios from "axios"
import { showToastMessage } from "../utility/utilityActions"
import { SET_CURRENT_USER, SET_LOGGEDIN_USER } from "./userConstants"
// set current user in redux store(who is signed up first time)
export const setCurrentUser = (userObj, callback) => async (dispatch) => {
    try {
        console.log(userObj)
        let response = await Axios.post(`user`, userObj)
        console.log(response.data)
        if (response.data.status === 200) {
            // data successfuly send to the server

            //show toast notification(by updating utilities state)
           dispatch(showToastMessage(response.data.message))

            // update app state
            dispatch({
                type: SET_CURRENT_USER,
                payload: response.data.data
            })
            // navigate user to home page
            callback()
        }
        else if (response.data.status === 400) {
            //show toast notification (by updating utilities state)
            dispatch(showToastMessage(response.data.message))
       }

    } catch (error) {
        console.log(error)
    }
}
// set login user request to server(loggedin the user and set the data in redux store)
export const setLoginUser = (userObj, callback) => async (dispatch) => {
    try {
        console.log(userObj)
        let response = await Axios.post(`/user/login`, userObj)
        console.log(response.data)
        if (response.data.status === 200) {
            // data successfuly send to the server

            //save token in local storage
            localStorage.setItem("pixtool-token", response.data.token);

            //show toast notification (by updating utilities state)
            dispatch(showToastMessage(response.data.message))


            // update app state
            dispatch({
                type: SET_LOGGEDIN_USER,
                payload: response.data.data
            })
            // navigate user to home page
            callback()
        }
        else if (response.data.status === 400) {
             //show toast notification (by updating utilities state)
             dispatch(showToastMessage(response.data.message))
        }

    } catch (error) {
        console.log(error)
    }
}