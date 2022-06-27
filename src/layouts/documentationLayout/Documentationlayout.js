import React, { Fragment } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Sidebar from '../../components/sidebar/Sidebar';
import './style.css';

export default function Documentationlayout({ children }) {
  return (
    <Fragment>
      <Navbar />
      <div className="docs">
        <div className="index">
          <Sidebar />
        </div>
        <main className="content">
          {children}
          <Footer />
        </main>
      </div>
    </Fragment>
  )
}
