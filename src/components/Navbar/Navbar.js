import React from "react";
import { Fragment } from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Burger from "../../assets/images/BurgerImage.png";
import MenuOver from "./MenuOver";
import { MENU_OVERLAY_ON } from "../../redux/constants/auth.constannts";
import { ArrowRight } from "react-bootstrap-icons";
import "./navbar.css";

export default function Navbar() {
  const dispatch = useDispatch();
  const { isAuthencated } = useSelector(state => state.Auth);
  const showMenu = useSelector(state => state.Auth.MenuOver);

  return (
    <Fragment>
      <MenuOver top={showMenu} />
      <header className="header bg-white">
        <div className="headerInnerRow">
          <div className="left">
            <Link to="/">
              <img src={logo} alt="logo" srcSet="" />
            </Link>
          </div>

          <button
            className="burger"
            onClick={() => dispatch({ type: MENU_OVERLAY_ON })}
          >
            <img src={Burger} alt="menu" width="50px" />
          </button>

          <nav>
            <div>
              {isAuthencated ? (
                <div className="getStartbtn">
                  <Link className="filllcolor" to="/register">
                    Go to Account{" "}
                    <ArrowRight />
                  </Link>
                </div>
              ) : (
                <>
                  <div className="getStartbtn">
                    <Link to="/login">Login</Link>
                  </div>
                  <div className="getStartbtn">
                    {
                      isAuthencated ? (
                        <Link className="filllcolor" to="https://storx.io/new">
                          Get API Key
                        </Link>
                      ) : (
                        <a className="filllcolor" target="_blank" href="http://109.169.55.25:3000/new"> Get API Key </a>
                      )
                    }
                  </div>
                </>
              )}
            </div>
          </nav>
        </div>
      </header>
    </Fragment>
  );
}
