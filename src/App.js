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
import Loader from './components/Loader/Loader';
import { showToastMessage } from './Redux/utility/utilityActions';


const App = ({ toastMessage, showToastMessage, numberOfRequests }) => {
  const notify = (message) => toast.dark(message);

  // show toast when toastMessage state changes
  useEffect(() => {
    console.log(toastMessage)
console.log(numberOfRequests)

    if (toastMessage) {
      notify(toastMessage)
      showToastMessage('')
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
  toastMessage: state.utilities.showMessage,
  numberOfRequests: state.utilities.numberOfRequests,
  toastMessage: state.utilities.showMessage
})
let mapDispatchToProps = {
  showToastMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
