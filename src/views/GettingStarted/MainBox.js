import React from "react";
import { Link } from "react-router-dom";
import "../documentation/home.css";

export default function MainBox() {
  return (
    <div className="main-box">
      <div className="start-para">
        <h4>Getting Started</h4>
        <p> To get started you'll need an API key.  </p>
      </div>

      <div className="getStartbtn">
        <Link className="filllcolor" to="/register">
          Get API Key
        </Link>
      </div>

      <div className="mid-para">
        <p>There are 2 ways where you can this API key to integrate into your system.</p>
      </div>

      <div style={{ marginTop: '0px' }} className="end-para">
        <ul className="ml-2rem">
          <li>
            <p>First is the standard REST API way where with the help of this API key to access all StorX storage APIs. </p>
          </li>
          <li>
            <p>Second is using the node package storx-storage-sdk if you node based system. You can directly use storage function of this library and integrate in to your app.</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
