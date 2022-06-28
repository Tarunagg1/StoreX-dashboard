import React from 'react'
import { Fragment } from 'react';
import './navbar.css';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';


export default function Navbar() {
    const dispatch = useDispatch();
    const { isAuthencated } = useSelector(state => state.Auth);

    return (
        <Fragment>
            <header className="header bg-white">
                <div className="headerInnerRow">
                    <div className="left">
                        <Link to="/">
                            <img src={logo} alt="logoo" srcSet="" />
                        </Link>
                    </div>
                    <nav className="right">
                        <div className="manuItems">
                            {
                                isAuthencated ? (
                                    <div className="getStartbtn">
                                        <Link className="filllcolor" to="/register">Go to Account <i className="material-icons">arrow_forward</i></Link>
                                    </div>
                                ) : (
                                    <>
                                        <div className="getStartbtn">
                                            <Link to="/login">Login</Link>
                                        </div>
                                        <div className="getStartbtn">
                                            <Link className="filllcolor" to="/register">Get Api Key</Link>
                                        </div>
                                    </>
                                )
                            }

                        </div>
                        <a href="/" onClick={null} className="nav-link nav-link-icon toggle-sidebarHome d-sm-inline d-md-inline d-lg-none text-center">
                            <i className="material-icons">&#xE5D2;</i>
                        </a>
                    </nav>
                </div>
            </header>
        </Fragment>
    )
}
