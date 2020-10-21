import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { withFirebase } from "../components/Firebase/Firebase";
import * as ROUTES from "../constants/routes";

//components
import Navigation from "./Navigation";
import LandingPage from "./Landing";
import SignUpPage from "./SignUp";
import SignInPage from "./SignIn";
import PasswordForget from "./PasswordForget";
import HomePage from "./Home";
import AccountPage from "./Account";
import AdminPage from "./Admin";
import { AuthUserContext } from "../components/Session/Session";

class App extends Component {
  state = {
    authUser: null,
  };

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged((authUser) => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    return (
      <AuthUserContext.Provider value={this.state.authUser}>
        <BrowserRouter>
          <div>
            <Navigation />

            <hr />

            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
            <Route path={ROUTES.HOME} component={HomePage} />
            <Route path={ROUTES.ACCOUNT} component={AccountPage} />
            <Route path={ROUTES.ADMIN} component={AdminPage} />
          </div>
        </BrowserRouter>
      </AuthUserContext.Provider>
    );
  }
}

export default withFirebase(App);
