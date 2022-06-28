import React from "react";
import './home.css';
export default function SideBox(){

    return(
        <div className="side-box">
            <div className="grid-container-sideBox">
              <div><a> Get Started </a></div>
              <div><a> Documentation </a></div>
              <div><a> Authenciation </a></div>
              <div><a> Endpoints </a></div>
              <div><a> Client libraries </a></div>
            </div>
        </div>
    )
}