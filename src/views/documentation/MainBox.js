import React from "react";
import { Link } from 'react-router-dom';
import "./home.css";


export default function MainBox() {
  return (
    <div className="main-box">
      <div className="start-para">
        <h4>Documentation</h4>
        <p>
          StorX API is a simple HTTP REST API for uploading, fetching, downloading and updating all your files and folders in you StorX account.
        </p>
      </div>


      <div className="mid-para">
        <p>It will help you do the following actions for your StorX account.</p>
      </div>

      <div style={{ marginTop: '0px' }} className="end-para">
        <ul className="ml-2rem">
          <li>
            <p>Fetching file/folder details, creating, moving and deleting those files/folders.</p>
          </li>
          <li>
            <p>Create a share link url for your folder/file to share.</p>
          </li>
        </ul>
      </div>

      <div className="mid-para">
        <p>You need an API key to use the API - this is a unique key that identifies your requests</p>
      </div>

      <div className="getStartbtn">
        <Link className="filllcolor" to="/register">
          Get API Key
        </Link>
      </div>
    </div>
  );
}
