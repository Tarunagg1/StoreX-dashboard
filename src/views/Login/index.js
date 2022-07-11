import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import "./login.css";
import logo from "../../assets/images/logo.png";
import { ArrowRight, XLg } from "react-bootstrap-icons";
import axiosinstance from '../../utils/axios/index'
import { decryptText, encryptText, generateNewKeys, passToHash } from '../../utils/common/crypt';
import Preloader from "../../assets/images/login_preloader.gif";
import { LOGIN_SUCCESS, SET_LOADING_FALSE, SET_LOADING_TRUE } from '../../redux/constants/auth.constannts';
import { setAuthToken } from '../../utils/common/localStorege';


export default function Login() {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.Auth);

  const [showPassword, setshowPassword] = useState(false);

  const [valid, setValid] = useState(false);


  const [data, setData] = useState({
    email: "ashish1@gmail.com",
    password: "Ashish@123"
  });



  const validateEmail = (email) => {
    // eslint-disable-next-line no-control-regex
    let emailPattern = /^((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*"))@((?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))$/;

    return emailPattern.test(email.toLowerCase());
  };

  const validateLoginForm = () => {
    let isValid = true;
    // Email validation

    if (data.email.length < 5 || !validateEmail(data.email)) {
      isValid = false;
    }

    // Pass length check
    if (data.password.length < 1) {
      isValid = false;
    }
    setValid(isValid);
  };

  const onSubmit = async event => {
    event.preventDefault();
    if (!data.email || !data.password) {
      alert.show("All fields required or invalid");
      return
    }
    try {
      dispatch({ type: SET_LOADING_TRUE });

      const isLoginStartSuccessfully = await axiosinstance.post('/login', { email: data.email });
      const keys = await generateNewKeys(data.password);

      // Check password
      const salt = decryptText(isLoginStartSuccessfully.data.sKey);
      const hashObj = passToHash({ password: data.password, salt });
      const encPass = encryptText(hashObj.hash);

      // access key payload and call api
      const getAccessTokens = await axiosinstance.post('/access', {
        email: data.email,
        password: encPass,
        // tfa: twoFactorCode,
        privateKey: keys.privateKeyArmored,
        publicKey: keys.publicKeyArmored,
        revocateKey: keys.revocationCertificate,
      });

      if (getAccessTokens.data.user.registerCompleted) {
        setAuthToken(getAccessTokens.data.token);
        dispatch({ type: LOGIN_SUCCESS, payload: { isAuthencated: true, token: getAccessTokens.data.token } });
      } else {
        alert.error("your account is not authorized please check your mail");
      }

    } catch (error) {
      console.log(error);
      dispatch({ type: SET_LOADING_FALSE });
      if (error.response.status === 400) {
        alert.error(error.response.data.error);
        return;
      } else if (error.response.status !== 200) {
        alert.error(error.response.data.error);
        return;
      } else {
        alert.error(error.response.data.error);
      }
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
    validateLoginForm();
  };

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
                    Forgot your Password ?{" "}
                  </Link>
                </span>
              </div>

              <button
                disabled={!valid || loading}
                className="btn btn-block btn button">
                {loading ? <><span>Sign In <ArrowRight /> </span><img alt="laoder" src={Preloader} /></> : "Sign In"}

                {/* Sing In <ArrowRight /> <img src={Preloader} /> */}
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
