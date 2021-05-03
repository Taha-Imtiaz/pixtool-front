import { useEffect } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { connect } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

import "./App.scss";

import SignIn from "./pages/Authentication/SignIn";
import SignUp from "./pages/Authentication/SignUp";
import Home from "./pages/Home/Home";
import HeroSection from "./pages/HeroSection/HeroSection";
import Accounts from "./pages/Accounts/Accounts";
import Test from "./pages/test";
import Loader from "./components/Loader/Loader";
import Player from "./pages/Player/Player";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import store from "./Redux/store";
import { getTeam } from "./Redux/team/teamActions";
import { checkUserAuthentication, getUserData } from "./Redux/user/userActions";
import { getProject } from "./Redux/project/projectActions";
import { getAccount } from "./Redux/account/accountActions";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Review from "./pages/Review/Review";

const App = ({
  toastMessage,
  numberOfRequests,
  user,

  history,
  accountId,
}) => {
  const notify = (message) => toast.dark(message);
  // show toast when toastMessage state changes
  useEffect(() => {
    if (toastMessage) {
      notify(toastMessage);
    }
  }, [toastMessage]);

  // on route change
  // useEffect(() => {

  history.listen((location) => {
    // console.log(location.pathname)

    sessionStorage.setItem("currentUrl", location.pathname);
  });


  // },[])

  // the below 2 useeffects loads data only once
  // get account of the user

  useEffect(() => {
    let checkUserAuth = checkUserAuthentication();
    if (checkUserAuth) {
      store.dispatch(getUserData());
      // history.push("/home")
    } else {
      history.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // get teams of account which is signed in currently(by default first team)
  useEffect(() => {
    if (user) {
      let { account_id } = user;
      if (account_id[0] && account_id[0]._id) {
        // get account
        store.dispatch(getAccount(account_id[0]._id));
      }
    }
  }, [user]);

  // show all the resources (projects) of 1st team
  // useEffect(() => {
  //   if (account) {

  //     // get all projects of first team
  //     let { projects, _id } = account[0];
  //     // console.log(pathname);
  //     // we extract _id from account[0] means first team
  //     console.log(projects)
  //     if (projects) {
  //       store.dispatch(
  //         getTeam(_id, projects[0]._id, () => {
  //           store.dispatch(getProject(projects[0]._id));
  //         })
  //       );
  // if navigate from /sign-in or /sign-up or /
  // if (
  //   pathname === "/sign-in" ||
  //   pathname === "/sign-up" ||
  //   pathname === "/"
  // ) {
  //   history.push(`/library/${projects[0]._id}`);
  // }
  // call api only if pathname === '/home/library/project[0].id'
  // if (
  //   pathname ===
  //   `/library/${projects[0]._id}`
  // ) {
  //   // get resources of 1st project
  //   store.dispatch(
  //     getTeam(_id, projects[0]._id, () => {
  //       store.dispatch(getProject(projects[0]._id));
  //     })
  //   );
  // }
  // if pathname !== `/home/library/${projects[0]._id}` then navigate to the location of pathname
  //     } else {
  //       history.push(pathname);

  //     }
  //   }
  //   sessionStorage.setItem("currentUrl", pathname)
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [account, pathname]);

  return (
    <div>
      {numberOfRequests > 0 && <Loader />}
      <ToastContainer />

      <Switch>
        <ErrorBoundary>
          <Route path="/" component={HeroSection} exact />
          <Route path="/home" component={Home} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/review/:id/:assetId?" component={Review} exact/>
          {/* <Route path = "/review/:id/player/:assetId" component = {Player}/> */}
          {/* <PrivateRoute path="/home/library/:projectId" component={Home} /> */}
          <PrivateRoute
            // path="/player/:assetId" 
        //  path =   {"/player/:assetId" | "/review/player/:assetId" }
            path={["/player/:assetId", "/review/player/:id/:assetId"]}
            component={Player} />
          <PrivateRoute path="/accounts" component={Accounts} />
          <PrivateRoute path="/test" component={Test} />

          {/* <Route path="/" component={HeroSection} exact /> */}
          {/* <Redirect to="/" /> */}
        </ErrorBoundary>
      </Switch>
    </div>
  );
};
var mapStateToProps = (state) => ({
  toastMessage: state.utilities.showMessage,
  numberOfRequests: state.utilities.numberOfRequests,
  user: state.users && state.users.user,
  account: state.accounts && state.accounts.account,
  team: state.teams && state.teams.team,
  accountId: state.users && state.users.user && state.users.user.account_id,
});

export default connect(mapStateToProps)(withRouter(App));
