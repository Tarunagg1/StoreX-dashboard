import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

export default function Login() {
  return (
    <Fragment>

      <div class="d-lg-flex half">
        <div class="bg order-1 order-md-2 imagContINER" ></div>
        <div class="contents order-2 order-md-1">
          <div class="container">
            <div class="row align-items-center justify-content-center">
              <div class="col-md-10">
                <h3>Signin to <strong>storeX == Developer console</strong></h3>
                <form class="formContainer">
                  <div class="form-group first">
                    <label for="username">Username</label>
                    <input type="text" class="form-control" placeholder="your-email@example.com" id="username" />
                  </div>

                  <div class="form-group last">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" placeholder="Your Password" id="password" />
                  </div>

                  <div class="d-flex mb-3 align-items-center">
                    <span class="ml-auto"><a href="#" class="forgot-pass">Forgot Password</a></span>
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
