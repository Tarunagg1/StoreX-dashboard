import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../Login/login.css';

export default function Register() {
  return (
    <Fragment>
      <div class="d-lg-flex half">
        <div class="bg  imagContINER" ></div>
        <div class="contents order-2">
          <div class="container">
            <div class="row align-items-center justify-content-center">
              <div class="col-md-10">
                <h3>Signup to <strong>storeX == Developer console</strong></h3>
                <form class="formContainer">
                  <div class="form-group first">
                    <label htmlFor="email">Email</label>
                    <input type="text" class="form-control" placeholder="your-email@example.com" id="example" />
                  </div>
                  <div class="form-group last">
                    <label htmlFor="password">Password</label>
                    <input type="password" class="form-control" placeholder="Your Password" id="password" />
                  </div>

                  <div class="form-group last">
                    <label htmlFor="password">Confirm password</label>
                    <input type="password" class="form-control" placeholder="confirm Your Password" id="password" />
                  </div>

                  <div class="d-flex mb-2 float-right">
                    <span>Have an Account? <Link to="/login">SignIn</Link></span>
                  </div>

                  <input type="submit" value="Sign up" class="btn btn-block button" />

                </form>
              </div>
            </div>
          </div>
        </div>


      </div>

    </Fragment>
  )
}
