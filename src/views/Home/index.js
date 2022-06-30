import React, { Fragment } from 'react'
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import './home.css';
import SideBox from './SideBox';
import MidBox from './MidBox';

export default function Home() {
  return (
    <Fragment>
      <div className="mainContainer">
          <Navbar /> 
          <section className="mainbox section d-flex align-items-center flex-column">
            <div className='grid-container'>
               <SideBox/>
               <MidBox />
            </div>
          </section>
          <Footer />
      </div>
    </Fragment>
  )
}
