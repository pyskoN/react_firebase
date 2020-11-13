import React from "react";

import { PasswordForgetForm } from "../components/PasswordForget";
import PasswordChange from "../components/PasswordChange";

const AccountPage = () => (
  <div>
    <h1>Account Page</h1>
    <PasswordChange />
    <p style={{ textAlign: "center", marginTop: "3em" }}>
      {" "}
      Or in case you do not remember your password - request a new one
    </p>
    <PasswordForgetForm />
  </div>
);

export default AccountPage;
