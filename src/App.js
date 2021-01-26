import './App.scss';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Home from './pages/Home/Home';
import HeroSection from './pages/HeroSection/HeroSection';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HeroSection} exact/>
        <Route path="/sign-in" component={SignIn} exact />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
