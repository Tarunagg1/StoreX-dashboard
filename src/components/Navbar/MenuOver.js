import React from "react";
import { Link } from "react-router-dom";
import Cross from "../../assets/images/CrossImage.png";
import "./navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { MENU_OVERLAY_OFF } from "../../redux/constants/auth.constannts";

export default function MenuOver(props) {
  const dispatch = useDispatch();
  const { isAuthencated } = useSelector(state => state.Auth);

  return (
    <div className="overlay" style={{ top: props.top }}>

      <div className="flex-container-cross">
        <button onClick={() => dispatch({ type: MENU_OVERLAY_OFF })}>
          <img src={Cross} alt="menu" />
        </button>
      </div>

      <h2>
        <Link
          onClick={() => dispatch({ type: MENU_OVERLAY_OFF })}
          className="color-link"
          to="/register"
        >
          Get started
        </Link>
      </h2>
      <h2>
        <Link
          onClick={() => dispatch({ type: MENU_OVERLAY_OFF })}
          className="color-link"
          to="/documentation"
        >
          Documentation
        </Link>
      </h2>
      <h2>Pricing</h2>
      <hr className="line"></hr>
      <h2>
        {
          isAuthencated ? (
            <Link className="color-link" to="/credentials">
              Dashboard
            </Link>
          ) : (
            <Link className="color-link" to="/login">
              Login
            </Link>
          )
        }
      </h2>

      <div className="getStartbtn menuover-btn">
      <a className="filllcolor" target="_blank" rel="noreferrer" href="http://109.169.55.25:3000/new"> Get API Key </a>

      </div>
    </div>
  );
}
