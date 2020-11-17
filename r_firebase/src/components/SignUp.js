import React, { Component } from "react";
import * as ROUTES from "../constants/routes";
import { withFirebase } from "../components/Firebase/Firebase";
import "../index.css";
import { Link, withRouter } from "react-router-dom";

const SignUp = () => (
  <div style={{ minHeight: "76vh" }}>
    <h1 style={{ textAlign: "center" }}>SignUp</h1>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  phone: "",
  error: null,
  about: "Add something about yourself",
  parish: "Please add parish",
};

class SignUpFormBase extends Component {
  state = { ...INITIAL_STATE };

  onSubmit = (event) => {
    const { username, email, phone, passwordOne, parish, about } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser) => {
        // Create a user in your Firebase realtime database
        return this.props.firebase.user(authUser.user.uid).set({
          username,
          email,
          phone,
          parish,
          about,
        });
      })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.ACCOUNT);
      })
      .catch((error) => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      username,
      phone,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    return (
      <form onSubmit={this.onSubmit} className="signForm">
        <input
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
          className="inputs"
        />
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
          className="inputs"
        />
        <input
          name="phone"
          value={phone}
          onChange={this.onChange}
          type="tel"
          placeholder="Phone number"
          className="inputs"
        />
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
          className="inputs"
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
          className="inputs"
        />

        <button disabled={isInvalid} type="submit" className="button">
          Sign Up
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignUpLink = () => (
  <p style={{ textAlign: "center" }}>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);
const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUp;

export { SignUpForm, SignUpLink };
