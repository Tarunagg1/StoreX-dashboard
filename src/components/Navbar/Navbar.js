import React from 'react'
import { Fragment } from 'react';
import './navbar.css';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <Fragment>
            <header className="header bg-white">
                <div className="headerInnerRow">

                    <div className="left">
                        <Link to="/">
                            <img src={logo} alt="logoo" srcSet="" />
                        </Link>
                    </div>
                    {/* <div className="center">
              <nav className="navItems">
                <div className="navlink">
                  <Link to="/">Get started</Link>
                </div>
                <div className="navlink">
                  <Link to="/">Documentation</Link>
                </div>
                <div className="navlink">
                  <Link to="/">Get started</Link>
                </div>
              </nav>
            </div> */}
                    <div className="right">
                        <div className="getStartbtn">
                            <Link to="/login">Login</Link>
                        </div>
                        <div className="getStartbtn">
                            <Link className="filllcolor" to="/register">Get Api Key</Link>
                        </div>
                    </div>
                </div>
            </header>
        </Fragment>
    )
}
