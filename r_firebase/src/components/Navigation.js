import React from "react";
import { Link } from "react-router-dom";
import SignOut from "../components/SignOut";
import * as ROUTES from "../constants/routes";
import { AuthUserContext } from "../components/Session/Session";

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {(authUser) => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
    </AuthUserContext.Consumer>
  </div>
);

const NavigationNonAuth = () => (
  <div>
    <ul>
      <li>
        <Link to={ROUTES.SIGN_IN}>Log In/Sign Up</Link>
      </li>
      <li>
        <Link to={ROUTES.LANDING}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </li>
      <li>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li>
      <li>
        <SignOut />
      </li>
    </ul>
  </div>
);
const NavigationAuth = () => (
  <div>
    <ul>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </li>
      <li>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li>
      <li>
        <SignOut />
      </li>
    </ul>
  </div>
);

export default Navigation;
