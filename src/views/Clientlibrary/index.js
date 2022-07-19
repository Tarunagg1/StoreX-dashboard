import React, { Fragment } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import SideBar from "../../components/sidebar/Sidebar";
import MainBox from "./MainBox";

export default function Clientlibrary() {
  return (
    <Fragment>
      <Navbar />
      <div className="grid-container">
        <SideBar />
        <MainBox />
      </div>
      <div className="flex-container">
        <Footer />
      </div>
    </Fragment>
  );
}
