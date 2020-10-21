import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { SignUpLink } from "./SignUp";
import { withFirebase } from "../components/Firebase/Firebase";
import * as ROUTES from "../constants/routes";
import { PasswordForgetLink } from "../components/PasswordForget";

const SignIn = () => (
  <div>
    <h1 style={{ textAlign: "center" }}>Sign In</h1>
    <SignInForm />
    <SignUpLink />
  </div>
);

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
};

class SignInFormBase extends Component {
  state = { ...INITIAL_STATE };

  onSubmit = (event) => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
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
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <form onSubmit={this.onSubmit} className="signForm">
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
          className="inputs"
        />
        <input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
          className="inputs"
        />
        <PasswordForgetLink />
        <button disabled={isInvalid} type="submit" className="button">
          Sign In
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignInForm = withRouter(withFirebase(SignInFormBase));

export default SignIn;

export { SignInForm };
