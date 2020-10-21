import React from "react";
import { withFirebase } from "../components/Firebase/Firebase";
// import * as ROUTES from "../constants/routes";
//history.push(ROUTES.LANDING) didn't work
import { Redirect } from "react-router-dom";

const SignOut = ({ firebase }) => (
  <button
    type="button"
    onClick={() => {
      firebase.doSignOut().then(() => <Redirect to="/admin" />);
    }}
  >
    Sign Out
  </button>
);

export default withFirebase(SignOut);
