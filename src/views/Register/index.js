import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "../Login/login.css";
import "./register.css";
import logo from "../../assets/images/logo.png";
import { ArrowRight, XLg } from "react-bootstrap-icons";
import { useDispatch } from 'react-redux';
// import { registerUserAction } from '../../redux/actions/auth.Actions';

export default function Register() {
  // const { loading, errorMessage, successMessage } = useSelector(state => state.Auth);
  const dispatch = useDispatch();


  const [registerData, setRegisterData] = useState({
    name: "",
    lastname: "",
    email: "",
    companyname: "",
    password: "",
    cpassword: ""
  });


  const InputEvent = event => {
    const { name, value } = event.target;
    setRegisterData(preVal => {
      return {
        ...registerData,
        [name]: value
      };
    });
  };

  const onSubmit = async event => {
    event.preventDefault();
    // dispatch(registerUserAction(registerData));
  }

  return (
    <Fragment>
      <div className="flex-container-login">
        <Link className="cross" alt="cross" to="/">
          <XLg />
        </Link>
      </div>

      <div className="container">
        <div className="d-flex align-items-center justify-content-center">
          <div className="box-mainauth col-md-6 top-2" style={{ marginTop: "5px" }}>
            <Link to="/">
              <img src={logo} alt="logo" className="logo" srcSet="" />
            </Link>
            <h3 className="title">Create your account</h3>
            <form className="formContainer" onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="email">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="john"
                  name="name"
                  onChange={InputEvent}
                  value={registerData.name}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Deo"
                  name="lastname"
                  onChange={InputEvent}
                  value={registerData.lastname}

                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Company Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="john"
                  name="companyname"
                  onChange={InputEvent}
                  value={registerData.companyname}

                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="your-email@example.com"
                  name="email"
                  onChange={InputEvent}
                  value={registerData.email}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={InputEvent}
                  name="password"
                  value={registerData.password}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Confirm password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={InputEvent}
                  name="cpassword"
                  value={registerData.cpassword}
                />
              </div>

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
