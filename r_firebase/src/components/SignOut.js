import React from "react";
import { withFirebase } from "../components/Firebase/Firebase";
//history.push(ROUTES.LANDING) didn't work
import { Redirect } from "react-router-dom";
import Button from "react-bootstrap/Button";
import * as ROUTES from "../constants/routes";
import { withRouter } from "react-router-dom";

const SignOut = ({ firebase, history }) => (
  <Button
    variant="outline-info "
    onClick={() => {
      firebase.doSignOut().then(() => history.push(ROUTES.LANDING));
    }}
  >
    Sign Out
  </Button>
);

export default withRouter(withFirebase(SignOut));
