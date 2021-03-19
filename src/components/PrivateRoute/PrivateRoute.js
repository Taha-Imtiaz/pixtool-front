import React from 'react'
import { Redirect, Route } from 'react-router'
import { checkUserAuthentication } from '../../Redux/user/userActions'

const PrivateRoute = ({component:Component,...restProps}) => {


    return (
      <Route
      {...restProps}
      render = {(props) => checkUserAuthentication() ? <Component  {...props}/> : <Redirect to = "/sign-in"/> }
      />
    )
}

export default PrivateRoute
