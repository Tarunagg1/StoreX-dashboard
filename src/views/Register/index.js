import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "../Login/login.css";
import "./register.css";
import logo from "../../assets/images/logo.png";
import { ArrowRight, XLg } from "react-bootstrap-icons";

export default function Register() {
  const [registerData, setRegisterData] = useState({
    name:"",
    lastname:"",
    email:"",
    
  });

  return (
    <Fragment>
      <div className="flex-container-login">
        <Link className="cross" alt="cross" to="/">
          <XLg />
        </Link>
      </div>

      <div className="container">
        <div className="d-flex align-items-center justify-content-center">
          <div className="col-md-6">
            <Link to="/">
              <img src={logo} alt="logo" className="logo" srcSet="" />
            </Link>
            <h3 className="title">Create your account</h3>
            <form className="formContainer" onSubmit={null}>
              <div className="form-group">
                <label htmlFor="email">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="john"
                  name="name"
                  id="example"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Deo"
                  name="lastname"
                  id="example"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Company Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="john"
                  name="companyname"
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
                  name="email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  id="password"
                  name="password"

                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Confirm password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  id="password"
                  name="cpassword"
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
