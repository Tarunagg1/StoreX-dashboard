import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAlert } from "react-alert";
import { useDispatch } from 'react-redux'
import './login.css';
import { loginUser } from '../../redux/actions/auth.Actions';

export default function Login() {
  const alert = useAlert();
  const dispatch = useDispatch();

  const [showPassword, setshowPassword] = useState(false);

  const [data, setData] = useState({
    email: "tarun@gmail.com",
    password: "tarun",
  });



  const onSubmit = async (event) => {
    event.preventDefault();
    if (!data.email || !data.password) {
      alert.show("All fields required!");
    } else {
      dispatch(loginUser(data));
    }
  }

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  return (
    <Fragment>
      <div class="d-lg-flex half">
        <div class="bg order-1 order-md-2 imagContINER" ></div>
        <div class="contents order-2 order-md-1">
          <div class="container">
            <div class="row align-items-center justify-content-center">
              <div class="col-md-10">
                <h3>Signin to <strong>storeX == Developer console</strong></h3>
                <form class="formContainer" onSubmit={onSubmit}>
                  <div class="form-group first">
                    <label htmlFor="Email">Email</label>
                    <input type="text" class="form-control" name="email" onChange={InputEvent} value={data.email} placeholder="your-email@example.com" id="username" required />
                  </div>

                  <div class="form-group last">
                    <label htmlFor="password">Password</label>
                    <input type={showPassword ? 'text' : 'password'} class="form-control" name="password" onChange={InputEvent} value={data.password} placeholder="Your Password" id="password" required />
                  </div>

                  <div class="d-flex mb-2 float-right">
                    <span><Link to="/login">Forgot Password</Link> ?</span>
                  </div>

                  <input type="submit" value="Log In" class="btn btn-block button" />
                </form>
                <div class="d-flex mt-3">
                  <span>Don't have an Account?? <Link to="/register">Create one</Link></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Fragment>
  )
}
