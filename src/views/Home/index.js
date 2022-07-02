import React, { Fragment } from 'react'
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import './home.css';
import SideBar from '../../components/sidebar/SideBar';
import MainBox from './MainBox';

export default function Home() {
  return (
    <Fragment>
          <Navbar /> 
            <div className='grid-container'>
               <SideBar />
               <MainBox />
            </div>
            <div className='flex-container'>
                <Footer />
            </div>
    </Fragment>
  )
}
