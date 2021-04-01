import { useEffect } from 'react';
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
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
import Player from './pages/Player/Player';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import store from './Redux/store';
import { getTeamData } from './Redux/team/teamActions';
import { checkUserAuthentication, getUserData } from './Redux/user/userActions';
import { getProject } from './Redux/project/projectActions';
import { getAccount } from './Redux/account/accountActions';

const App = ({ toastMessage, numberOfRequests, user, account, history, accountId }) => {
  const notify = (message) => toast.dark(message);

  // show toast when toastMessage state changes
  useEffect(() => {
    if (toastMessage) {
      notify(toastMessage)
    }

  }, [toastMessage])
  // the below 2 useeffects loads data only once 
  // get account of the user
  useEffect(() => {

    let checkUserAuth = checkUserAuthentication()
    if (checkUserAuth) {
      store.dispatch(getUserData())
    }
    else {
      history.push('/')
    }

  }, [accountId])

  // get teams of account which is signed in currently(by default first team) 
  useEffect(() => {
    if (user) {
      let { account_id } = user

      if (account_id[0] &&  account_id[0]._id) {
        store.dispatch(getAccount(account_id[0]._id))
      }
    }

  }, [user])

  // show all the resources (projects) of 1st team
  useEffect(() => {
    if (account) {
      // get all projects of first team
      let { projects, _id } = account[0];
      // we extract _id from account[0] means first team
      if (projects) {
        // navigate to /home /projectId
        history.push(`/home/library/${projects[0]._id}`)

        // get resources of 1st project
        store.dispatch(getTeamData(_id, projects[0]._id, () => {
          store.dispatch(getProject(projects[0]._id));
        }))

      }
    }
  }, [account]);


  return (
    <div>
      {numberOfRequests > 0 && <Loader />}

      
        <ToastContainer />

        <Switch>
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <PrivateRoute path="/home" component={Home} />
          
          <PrivateRoute path="/player/:assetId" component={Player} />
          <PrivateRoute path="/accounts" component={Accounts} />
          <PrivateRoute path="/test" component={Test} />
          <Route path="/" component={HeroSection} exact />
          <Redirect to="/" />
        </Switch>
     
    </div>
  );
}
var mapStateToProps = (state) => ({
  toastMessage: state.utilities.showMessage,
  numberOfRequests: state.utilities.numberOfRequests,
  user: state.users && state.users.user,
  account: state.accounts && state.accounts.account,
  team: state.teams && state.teams.team,
  accountId: state.users && state.users.user && state.users.account_id


})


export default connect(mapStateToProps)(withRouter(App));
