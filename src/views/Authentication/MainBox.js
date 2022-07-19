import React from "react";
import { Link } from 'react-router-dom';
import "../documentation/home.css";


export default function MainBox() {
  return (
    <div className="main-box">
      <div className="start-para">
        <h4>Authentication</h4>
        <p>
          Authentication is handled with a simple API key.
        </p>
        <p>
          Your API key is:
        </p>

        <div className="getStartbtn" style={{ margin: "0px" }}>
          <Link className="filllcolor" to="/register">
            Get API Key
          </Link>
        </div>
      </div>


      <div className="mid-para">
        <p>You can attach your API key to a request in this way:</p>
      </div>

      <div style={{ marginTop: '0px' }} className="end-para">
        <ul className="ml-2rem">
          <li>
            <p>Via the x-api-key HTTP header.</p>
          </li>
        </ul>
      </div>
      <div className="mid-para">
        <p>We prefer this method so that your API key isn't visible to others in logs or via request sniffing.</p>
        <p>If you don't send your API key correctly, or your API key is invalid, you will receive a 401 - Unauthorized HTTP error.</p>
      </div>
    </div>
  );
}
