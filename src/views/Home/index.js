import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar';
import './home.css';

export default function Home() {
  return (
    <Fragment>
      <div className="mainContainer">
        <Navbar />
        <section className="mainbox section d-flex align-items-center flex-column">
          <h1 className="heading">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis.</h1>

          <div className="subheading">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos iure laborum repellat. Veritatis, nulla?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos iure laborum repellat. Veritatis, nulla?</p>
          </div>
          <div className="buttons">
            <div className="getStartbtn">
              <Link to="/login" className="p12-34">Documentation &nbsp;  <i className="material-icons">arrow_forward</i></Link>
            </div>
            <div className="getStartbtn">
              <Link className="filllcolor p12-34" to="/register">Get Api Key &nbsp;  <i className="material-icons">arrow_forward</i></Link>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="mainfoterSection">
            <div className="footer-menu">
              <h6 className="footer-item-heading">News API</h6>
              <div className="footer-item">
                <Link className="footer-itemLink" to="/register">Get Api Key</Link>
              </div>
              <div className="footer-item">
                <Link className="footer-itemLink" to="/register">Get Api Key</Link>
              </div>
              <div className="footer-item">
                <Link className="footer-itemLink" to="/register">Get Api Key</Link>
              </div>
              <div className="footer-item">
                <Link className="footer-itemLink" to="/register">Get Api Key</Link>
              </div>
              <div className="footer-item">
                <Link className="footer-itemLink" to="/register">Get Api Key</Link>
              </div>

            </div>

            <div className="footer-menu">
              <h6 className="footer-item-heading">News API</h6>
              <div className="footer-item">
                <Link className="footer-itemLink" to="/register">Get Api Key</Link>
              </div>
              <div className="footer-item">
                <Link className="footer-itemLink" to="/register">Get Api Key</Link>
              </div>
              <div className="footer-item">
                <Link className="footer-itemLink" to="/register">Get Api Key</Link>
              </div>
              <div className="footer-item">
                <Link className="footer-itemLink" to="/register">Get Api Key</Link>
              </div>
              <div className="footer-item">
                <Link className="footer-itemLink" to="/register">Get Api Key</Link>
              </div>

            </div>

            <div className="footer-menu">
              <h6 className="footer-item-heading">News API</h6>
              <div className="footer-item">
                <Link className="footer-itemLink" to="/register">Get Api Key</Link>
              </div>
              <div className="footer-item">
                <Link className="footer-itemLink" to="/register">Get Api Key</Link>
              </div>
              <div className="footer-item">
                <Link className="footer-itemLink" to="/register">Get Api Key</Link>
              </div>
              <div className="footer-item">
                <Link className="footer-itemLink" to="/register">Get Api Key</Link>
              </div>
              <div className="footer-item">
                <Link className="footer-itemLink" to="/register">Get Api Key</Link>
              </div>

            </div>

          </div>
        </footer>
      </div>

    </Fragment>
  )
}
