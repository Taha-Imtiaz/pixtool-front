import './App.scss';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Home from './pages/Home/Home';
import HeroSection from './pages/HeroSection/HeroSection';
import Postmortem from './pages/Postmortem/Postmortem';
import Test from './pages/test';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const App = ({ toastMessage }) => {

  const notify = (message) => toast.dark(message);

  // show toast when toastMessage state changes
  useEffect(() => {
    console.log(toastMessage)
    if (toastMessage) {
      notify(toastMessage)
    }
  }, [toastMessage])
  return (
    <div>

      <Router>
        <ToastContainer />
        <Switch>
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/home" component={Home} />
          <Route path="/player" component={Postmortem} />
          <Route path="/test" component={Test} />
          <Route path="/" component={HeroSection} exact />
        </Switch>
      </Router>
    </div>
  );
}
var mapStateToProps = (state) => ({
  toastMessage: state.utilities.showMessage
})

export default connect(mapStateToProps)(App);
