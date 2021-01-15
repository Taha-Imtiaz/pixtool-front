import './App.scss';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={SignIn} exact/>
        <Route path="/signUp" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
