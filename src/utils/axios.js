import axios from "axios"
import store from "../Redux/store"
import { showToastMessage } from "../Redux/utility/utilityActions"
import { HIDE_LOADER, SHOW_LOADER } from "../Redux/utility/utilityConstants"


const isHandlerEnabled = (config = {}) => {
    // check if the handler enabled property is true or not
    return config.hasOwnProperty(`handlerEnabled`) && config.handlerEnabled ? true : false
}
const requestHandler = (request) => {
    if (isHandlerEnabled(request.config)) {
        // if isHandlerEnabled is true send authorization token in headers
        request.headers['Authorization'] = localStorage.getItem('pixtool-token')
    }
    return request
}
const Axios = () => {
    // set the default url part of axios(common part of url in all apis)
    // axios.defaults.baseURL = 'https://pixtool.herokuapp.com/api/';
    // axios.defaults.baseURL = 'http://192.168.43.136:3001/api/';
    // axios.defaults.baseURL = 'http://10.0.6.197:3001/api/';
    
    axios.defaults.baseURL = 'http://localhost:3001/api/';

    // axios.defaults.baseURL = 'http://10.0.5.194:3001/api/';

    // Request Interceptors(before we send a request)
    axios.interceptors.request.use((req) => {
        // check if the user has an internet connection
        if (navigator.onLine) {
            // if user has internet connection then send request
            requestHandler(req)
            store.dispatch({type: SHOW_LOADER})
        }
        else {
            // internet connectivity error
            throw new axios.Cancel("Operation cancelled due to disconnectivity of Internet")
        }
        return req
    }, error => {
        // if the request is failed to send
        store.dispatch({type:HIDE_LOADER})
        return Promise.reject(error)
    })

    // response interceptor (when responseis sent back) 
    axios.interceptors.response.use((res) => {
        store.dispatch({type:HIDE_LOADER})
        return res
    }, error => {

    store.dispatch({ type: HIDE_LOADER })

        if (axios.isCancel(error)) { }
        else {
            if (error.message === `Network Error`) {
                store.dispatch(showToastMessage("'Server Is Down, Try Latter.'"))
            }
            else if (error.message === `Request failed with status code 401`) {
                //   refresh token case
                localStorage.clear()
                window.location.reload()

            }
        }
        return Promise.reject(error)
    })


}

export default Axios




