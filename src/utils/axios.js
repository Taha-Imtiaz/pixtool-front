import axios from "axios"

const Axios = () => {
// set the default url part of axios(common part of url in all apis)
    axios.defaults.baseURL = 'https://pixtool.herokuapp.com/api/';
    // axios.defaults.baseURL = 'http://localhost:3001/api/';
  
}

export default Axios




