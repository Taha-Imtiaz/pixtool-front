
import Axios from "axios"
import { showToastMessage } from "../utility/utilityActions"
import { SET_CURRENT_USER, SET_LOGGEDIN_USER, LOGOUT, GET_USER_DATA } from "./userConstants"

// set current user in redux store(who is signed up first time)
export const signupUser = (userObj, callback) => async (dispatch) => {
    try {
        let response = await Axios.post(`user`, userObj)
        console.log(response.data.token, response.data.data)
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
        // callback()


    } catch (e) {
        if (e.response && e.response.data) {
            dispatch(showToastMessage(e.response.data.message))

        }
    }
}
// set login user request to server(loggedin the user and set the data in redux store)
export const loginUser = (userObj, callback) => async (dispatch) => {
    try {
        let response = await Axios.post(`user/login`, userObj)
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
        // callback()



    } catch (e) {
        if (e.response && e.response.data) {
            dispatch(showToastMessage(e.response.data.message))

        }
    }
}

export const logout = () => (dispatch) => {
    // clear localand sessionStorage 
    localStorage.clear()
    sessionStorage.clear()
    dispatch({
        type: LOGOUT,
    })
}
// check user auth
export const checkUserAuthentication = () => {
    let token = localStorage.getItem("pixtool-token");
    if (token) return true
    else return false
}


// To Get The User Data
export const getUserData = () => async (dispatch) => {
    try {
        let response = await Axios.get(`user`, {
            config: {
                handlerEnabled: true
            }
        })

        // update app state
        dispatch({
            type: GET_USER_DATA,
            payload: response.data.data
        });

    } catch (e) {
        if (e.response && e.response.data) {
            dispatch(showToastMessage(e.response.data.message))

        }
    }
}
