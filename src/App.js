import './App.scss';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Home from './pages/Home/Home';
import HeroSection from './pages/HeroSection/HeroSection';
import Postmortem from './pages/Postmortem/Postmortem';
import Test from './pages/test';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HeroSection} exact/>
        <Route path="/sign-in" component={SignIn} exact />
        <Route path="/sign-up" component={SignUp} exact/>
        <Route path="/home" component={Home} exact/>
        <Route path="/postmortem" component={Postmortem} exact/>
        <Route path="/test" component={Test} exact/>
      </Switch>
    </Router>
  );
}

export default App;
