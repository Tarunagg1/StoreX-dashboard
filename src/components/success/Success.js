import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import logo from '../../assets/images/logo.png';

export default function Success() {

  return (
    <Fragment>
      <div className="container">
        <div className="d-flex align-items-center justify-content-center">
          <div className="col-md-6 top-5">
            <Link to="/">
              <img src={logo} alt="logo" className="logo" srcSet="" />
            </Link>
            <h1 className="headingtitle">Registration completed</h1>
            <p className="subhesading">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, dignissimos?</p>
            <p className="subhesading">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nisi a ab sequi impedit quasi nihil iste molestias cupiditate ea, modi corporis esse ratione laboriosam sunt quis saepe voluptate eaque fugit blanditiis. Pariatur earum sed illo, molestias cum vel similique.</p>
            <div className="bottomButtons">
              <div className="buttons d-flex justify-content-between align-items-center">
                <Link to="/" className='btn btn-block btn button'>Get Api Key &nbsp; &nbsp; <i className="material-icons">arrow_forward</i></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
