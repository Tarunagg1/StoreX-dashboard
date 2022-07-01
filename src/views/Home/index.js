import React, { Fragment } from 'react'
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import './home.css';
import SideBar from '../../components/sidebar/SideBar';
import MainBox from './MainBox';

export default function Home() {
  return (
    <Fragment>
      <div className="mainContainer">
          <Navbar /> 
          <section className="mainbox section d-flex align-items-center flex-column">
            <div className='grid-container'>
               <SideBar />
               <MainBox />
            </div>
          </section>
          <Footer />
      </div>
    </Fragment>
  )
}
