import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { withFirebase } from "../components/Firebase/Firebase";
import * as ROUTES from "../constants/routes";

//components
import Navigation from "./Navigation";
import Landing from "./Landing";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import PasswordForget from "./PasswordForget";
import Home from "./Home";
import Account from "./Account";
import Admin from "./Admin";
import { AuthUserContext } from "../components/Session/Session";
import Password from "./Password";
import About from "./About";
import Contact from "./Contact";
import EditProfile from "./EditForm";
import TableofEvents from "./TableofEvents";
import Footer from "./Footer";

class App extends Component {
  state = {
    authUser: null,
    userName: null,
  };

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged((authUser) => {
      if (!authUser) {
        console.log(`authuser - null`);
        this.setState({ authUser: null });
      } else {
        console.log(`auth User`, this.props.firebase.auth);
        let user = this.props.firebase.auth.currentUser;
        this.setState({ authUser: user });
      }
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

            <Route exact path={ROUTES.LANDING} component={Landing} />
            <Route path={ROUTES.SIGN_UP} component={SignUp} />
            <Route path={ROUTES.SIGN_IN} component={SignIn} />
            <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
            <Route path={ROUTES.HOME} component={Home} />
            <Route path={ROUTES.ACCOUNT} component={Account} />
            <Route path={ROUTES.ADMIN} component={Admin} />
            <Route path={ROUTES.PASSWORD} component={Password} />
            <Route path={ROUTES.ABOUT} component={About} />
            <Route path={ROUTES.CONTACT} component={Contact} />
            <Route path={ROUTES.EDIT} component={EditProfile} />
            <Route path={ROUTES.EVENTS} component={TableofEvents} />

            <Footer />
          </div>
        </BrowserRouter>
      </AuthUserContext.Provider>
    );
  }
}

export default withFirebase(App);
