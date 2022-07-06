import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import "../Login/login.css";
import logo from "../../assets/images/logo.png";
import { ArrowRight, XLg } from "react-bootstrap-icons";
import { motion } from "framer-motion/dist/framer-motion";

export default function ResetPassword() {
  const RightIcon = motion(ArrowRight, { forwardMotionProps: true });
  const [hover, setHover] = useState(false);
  const alert = useAlert();

  const [data, setData] = useState({
    email: ""
  });

  const onSubmit = async event => {
    event.preventDefault();
    if (!data.email || !data.password) {
      alert.show("All fields required!");
    } else {
      console.log("siucmin");
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
            <h3 className="title">Reset password</h3>
            <form className="formContainer" onSubmit={onSubmit}>
              <div className="form-group first">
                <label htmlFor="Email">Please enter your email address</label>
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
              <motion.button
                whileHover={{ scale: 1.1 }}
                onHoverStart={e => {
                  setHover(true);
                }}
                onHoverEnd={e => {
                  setHover(false);
                }}
                className="btn btn-block btn button"
              >
                Send Password Reset Link{" "}
                <RightIcon
                  animate={
                    hover ? { scale: 1.3, x: 50 } : { scale: 1.3, x: 10 }
                  }
                />
              </motion.button>
            </form>
            <div className="mt-4 text-center">
              <span className="text-center">
                Don't have an account?{" "}
                <Link className="link" to="/login">
                  Back to login
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

// style = {{ marginLeft: hover }}
