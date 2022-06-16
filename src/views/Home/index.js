import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png';
import './home.css';

export default function Home() {
  return (
    <Fragment>
      <div className="main">
        <header className="header bg-white">
          <div className="left">
            <img src={logo} alt="logoo" srcSet="" />
          </div>
          <div className="center">
            <nav>
              <div className="link">
                <Link to="/">Get started</Link>
              </div>
              <div className="link">
                <Link to="/">Documentation</Link>
              </div>
              <div className="link">
                <Link to="/">Get started</Link>
              </div>
            </nav>
          </div>
          <div className="right">
            <div className="btn">
              <Link to="/">Login</Link>
            </div>
            <div className="btn">
              <Link to="/">Get Api Key</Link>
            </div>
          </div>
        </header>
      </div>

    </Fragment>
  )
}
