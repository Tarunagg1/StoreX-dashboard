import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import './style.css';

export default function Home() {
  return (
    <Fragment>
      <div className="homeContainer">
        <Navbar />
        <section className="mainbox section d-flex align-items-center flex-column">
          <h1 className="heading">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>

          <div className="subheading">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos iure laborum. </p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos iure laborum. </p>
          </div>
          <div className="buttons">
            <div className="getStartbtn mainbutton">
              <Link to="/documentation" className="p12-34">Documentation &nbsp;  <i className="material-icons">arrow_forward</i></Link>
            </div>
            <div className="getStartbtn mainbutton">
              <Link className="filllcolor p12-34" to="/register">Get Api Keys &nbsp; &nbsp; &nbsp;  <i className="material-icons">arrow_forward</i></Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>

    </Fragment>
  )
}
