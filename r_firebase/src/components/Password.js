import React from "react";

import { PasswordForgetForm } from "../components/PasswordForget";
import PasswordChange from "../components/PasswordChange";

const Password = () => (
  <div>
    <h3>You can change your password anytime</h3>
    <PasswordChange />
    <p style={{ textAlign: "center", marginTop: "3em" }}>
      {" "}
      Or in case you do not remember your password - request a new one
    </p>
    <PasswordForgetForm />
  </div>
);

export default Password;
