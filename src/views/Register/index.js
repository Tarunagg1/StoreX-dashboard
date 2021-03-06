import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../Login/login.css";
import "./register.css";
import logo from "../../assets/images/logo.png";
import { ArrowRight, XLg } from "react-bootstrap-icons";

export default function Register() {
  return (
    <Fragment>
      <div className="flex-container-login">
        <Link className="cross" alt="cross" to="/">
          <XLg />
        </Link>
      </div>

      <div className="container">
        <div className="d-flex align-items-center justify-content-center">
          <div className="col-md-6 top-2">
            <Link to="/">
              <img src={logo} alt="logo" className="logo" srcSet="" />
            </Link>
            <h3 className="title">Create your account</h3>
            <form className="formContainer" onSubmit={null}>
              <div className="form-group">
                <label htmlFor="email">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="john"
                  id="example"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="your-email@example.com"
                  id="example"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Your Password"
                  id="password"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Confirm password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="confirm Your Password"
                  id="password"
                />
              </div>

              {/* <div className="d-flex mb-2 float-right">
                <span>Have an Account? <Link to="/login">SignIn</Link></span>
              </div> */}

              <button className="btn btn-block btn button">
                Continue <ArrowRight />
              </button>
            </form>
            <div className="mt-4 text-center">
              <span className="text-center">
                Already have an account?{" "}
                <Link className="link" to="/login">
                  Login
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
