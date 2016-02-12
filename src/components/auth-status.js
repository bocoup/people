import React from "react"; // eslint-disable-line no-unused-vars
import { Link } from "react-router";
import auth from "../util/auth";

const AuthStatus = () => (
  <div className="auth-status">
    Currently logged in. <Link to="/login" onClick={ auth.logout }>Log out</Link>
  </div>
);

export default AuthStatus;
