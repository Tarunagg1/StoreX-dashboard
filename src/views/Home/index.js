import React, { Fragment } from 'react'
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import './home.css';
import Box from './Box';
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
            <Box color='#1f2d2d'  width='650px' height='800px' />
          </div>
        </section>
        <Footer />
      </div>
    </Fragment>
  )
}
