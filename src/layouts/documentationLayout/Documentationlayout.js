import React, { Fragment } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import SideBar from '../../components/sidebar/SideBar';
import Documentation from './Documentation';
import './style.css';

export default function Documentationlayout({ children }) {
  return (
    <Fragment>
          <Navbar />
             <div className='grid-container'>
              <SideBar />
              <Documentation />
             </div>
            <div className='.flex-container'>
               <Footer />
            </div>
    </Fragment>
  )
}
