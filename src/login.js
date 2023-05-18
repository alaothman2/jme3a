import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <div className="container">
        <i className="i1"></i>
        <i className="i2"></i>
        <i className="i3"></i>
        <div className="login">
          <h2>login</h2>
          <div className="inputBx">
            <input type="email" placeholder="Email" />
          </div>
          <div className="inputBx">
            <input type="password" placeholder="Password" />
          </div>

          <div className="inputBx">
            <input type="submit" placeholder="Sign in" />
          </div>

          <div className="links">
            <Link to="/forget" >Forget Password</Link>
            <Link to="/register " >Register </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
