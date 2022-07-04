import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import "./login.css";
import { loginUser } from "../../redux/actions/auth.Actions";
import logo from "../../assets/images/logo.png";
import Cross from "../../assets/images/CrossImage.png";

export default function Login() {
  const alert = useAlert();
  const dispatch = useDispatch();

  const [showPassword, setshowPassword] = useState(false);

  const [data, setData] = useState({
    email: "tarun@gmail.com",
    password: "tarun"
  });

  const onSubmit = async event => {
    event.preventDefault();
    if (!data.email || !data.password) {
      alert.show("All fields required!");
    } else {
      dispatch(loginUser(data));
    }
  };

  const InputEvent = event => {
    const { name, value } = event.target;
    setData(preVal => {
      return {
        ...preVal,
        [name]: value
      };
    });
  };

  return (
    <Fragment>
      <Link className="cross" alt="cross" to="/">
        <img src={Cross} />
      </Link>

      <div className="container">
        <div className="d-flex align-items-center justify-content-center">
          <div className="col-md-6 top-10">
            <Link to="/">
              <img src={logo} alt="logo" className="logo" srcSet="" />
            </Link>
            <h3 className="title">Sign in to your account</h3>
            <form className="formContainer" onSubmit={onSubmit}>
              <div className="form-group first">
                <label htmlFor="Email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  onChange={InputEvent}
                  value={data.email}
                  placeholder="your-email@example.com"
                  id="username"
                  required
                />
              </div>

              <div className="form-group mt-4">
                <label htmlFor="password">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  name="password"
                  onChange={InputEvent}
                  value={data.password}
                  placeholder="Your Password"
                  id="password"
                  required
                />
              </div>

              <div className="d-flex mb-4 float-right">
                <span>
                  <Link to="/forgotpassword" className="link">
                    Forgot your Password?{" "}
                  </Link>
                </span>
              </div>

              <button className="btn btn-block btn button">
                Continue <i className="material-icons">arrow_forward</i>
              </button>
            </form>
            <div className="mt-4 text-center">
              <span className="text-center">
                Don't have an Account?{" "}
                <Link className="link" to="/register">
                  Signup
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
