import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignOut from "../components/SignOut";
import * as ROUTES from "../constants/routes";
import Password from "../components/Password";
import { AuthUserContext } from "../components/Session/Session";
import { Nav, Navbar, Form, Image, NavDropdown } from "react-bootstrap";
import firebase from "../components/Firebase/Firebase";
import { withFirebase } from "../components/Firebase/Firebase";

const Navigation = (props) => (
  <div>
    <AuthUserContext.Consumer>
      {(authUser) =>
        authUser ? (
          <NavigationAuth authUser={authUser} firebase={props.firebase} />
        ) : (
          <NavigationNonAuth />
        )
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationNonAuth = () => (
  <div>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Parent Harbor</Navbar.Brand>
      <Nav className="mr-auto">
        <Link className="nav-link" to={ROUTES.LANDING}>
          Home
        </Link>
        <Link className="nav-link" to={ROUTES.ABOUT}>
          About
        </Link>
        <Link className="nav-link" to={ROUTES.EVENTS}>
          Events
        </Link>
        <Link className="nav-link" to={ROUTES.CONTACT}>
          Contact us
        </Link>
      </Nav>
      <Link className="nav-link ml-auto" to={ROUTES.SIGN_IN}>
        Sign In
      </Link>
    </Navbar>
  </div>
);

class NavigationAuth extends Component {
  state = {
    username: "",
  };

  componentDidMount() {
    this.props.firebase.db
      .ref("/users/" + this.props.authUser.uid)
      .once("value")
      .then((snapshot) => {
        const username =
          (snapshot.val() && snapshot.val().username) || "User Name";
        this.setState({ username });
      });
    console.log(this.state.username);
  }

  render() {
    const userName = this.state.username;
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Parent Harbor</Navbar.Brand>
        <Nav className="mr-auto">
          <Link className="nav-link" to={ROUTES.HOME}>
            Home
          </Link>
          <Link className="nav-link" to={ROUTES.ACCOUNT}>
            Account
          </Link>
          <Link className="nav-link" to={ROUTES.EVENTS}>
            Events
          </Link>
          <Link className="nav-link" to={ROUTES.CONTACT}>
            Contact us
          </Link>
        </Nav>
        <Form inline>
          <Nav className="ml-auto">
            <NavDropdown title={userName} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <Link to={ROUTES.EDIT}>Edit</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={ROUTES.PASSWORD}>Password</Link>
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                <SignOut />
              </NavDropdown.Item>
            </NavDropdown>
            <Image alt="" className="profile-image" />
          </Nav>
        </Form>
      </Navbar>
    );
  }
}
export default withFirebase(Navigation);
