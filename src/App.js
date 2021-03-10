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


<<<<<<< HEAD
const App = ({ toastMessage, showToastMessage, numberOfRequest }) => {
=======
const App = ({ toastMessage }) => {
>>>>>>> 58dd5342badb0b96e564736dac1c68e3ef6c4804

  const notify = (message) => toast.dark(message);

  // show toast when toastMessage state changes
  useEffect(() => {
    console.log(toastMessage)
    if (toastMessage) {
      notify(toastMessage)
<<<<<<< HEAD
      showToastMessage('')
=======
>>>>>>> 58dd5342badb0b96e564736dac1c68e3ef6c4804
    }
  }, [toastMessage])
  return (
    <div>
<<<<<<< HEAD
      {/* {numberOfRequest > 0 && <Loader/>} */}
=======

>>>>>>> 58dd5342badb0b96e564736dac1c68e3ef6c4804
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
<<<<<<< HEAD
  toastMessage: state.utilities.showMessage,
  numberOfRequest: state.utilities.numberOfRequest
=======
  toastMessage: state.utilities.showMessage
>>>>>>> 58dd5342badb0b96e564736dac1c68e3ef6c4804
})
let mapDispatchToProps = {
  showToastMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
