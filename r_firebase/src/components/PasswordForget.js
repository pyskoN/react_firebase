import React, { Component } from "react";
import { Link } from "react-router-dom";

import { withFirebase } from "../components/Firebase/Firebase";
import * as ROUTES from "../constants/routes";

const PasswordForget = () => (
  <div>
    <h1>PasswordForget</h1>
    <PasswordForgetForm />
  </div>
);

const INITIAL_STATE = {
  email: "",
  error: null,
};

class PasswordForgetFormBase extends Component {
  state = { ...INITIAL_STATE };

  onSubmit = (event) => {
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
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
    const { email, error } = this.state;

    const isInvalid = email === "";

    return (
      <form onSubmit={this.onSubmit} className="signForm ">
        <input
          name="email"
          value={this.state.email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
          className="inputs"
        />
        <button disabled={isInvalid} type="submit" className="button">
          Reset my Password
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const PasswordForgetLink = () => (
  <p style={{ textAlign: "right", fontSize: "small" }}>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);

export default PasswordForget;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };
