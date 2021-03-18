import React from 'react'
import { Redirect, Route } from 'react-router'

const PrivateRoute = ({component:Component,...restProps}) => {
const checkUserAuthentication = () => {
let token = localStorage.getItem("pixtool-token");
if(token) return true
else return false
}

    return (
      <Route
      {...restProps}
      render = {(props) => checkUserAuthentication() ? <Component  {...props}/> : <Redirect to = "/sign-in"/> }
      />
    )
}

export default PrivateRoute
