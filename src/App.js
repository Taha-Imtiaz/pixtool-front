import './App.scss';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Home from './pages/Home/Home';
import HeroSection from './pages/HeroSection/HeroSection';
import Postmortem from './pages/Postmortem/Postmortem';
import Test from './pages/test';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp}/>
        <Route path="/home" component={Home}/>
        <Route path="/player" component={Postmortem}/>
        <Route path="/test" component={Test}/>
        <Route path="/" component={HeroSection} exact/>
      </Switch>
    </Router>
  );
}

export default App;
