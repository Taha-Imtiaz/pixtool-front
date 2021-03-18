import { useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';
import "react-toastify/dist/ReactToastify.css";

import './App.scss';

import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Home from './pages/Home/Home';
import HeroSection from './pages/HeroSection/HeroSection';
import Accounts from './pages/Accounts/Accounts';
import Test from './pages/test';
import Loader from './components/Loader/Loader';
import { showToastMessage } from './Redux/utility/utilityActions';
import Player from './pages/Player/Player';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


const App = ({ toastMessage, showToastMessage, numberOfRequests }) => {
  const notify = (message) => toast.dark(message);

  // show toast when toastMessage state changes
  useEffect(() => {

    if (toastMessage) {
      notify(toastMessage)
    }
  }, [toastMessage])
  return (
    <div>
      {numberOfRequests > 0 && <Loader/>}
      <Router>
        <ToastContainer />
        <Switch>
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <PrivateRoute path="/home" component={Home} />
          <PrivateRoute path="/player/:assetId" component={Player} />
          <PrivateRoute path="/accounts" component={Accounts} />
          <PrivateRoute path="/test" component={Test} />
          <Route path="/" component={HeroSection} exact />
          <Redirect to= "/sign-in"/>
        </Switch>
      </Router>
    </div>
  );
}
var mapStateToProps = (state) => ({
  toastMessage: state.utilities.showMessage,
  numberOfRequests: state.utilities.numberOfRequests,
})
let mapDispatchToProps = {
  showToastMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
