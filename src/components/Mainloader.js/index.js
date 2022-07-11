import React from "react";
import "./mainloader.css";

const Mainloader = () => {
  return (
    <div id="loading">
      <div className="preloader loading">
        <span className="slice"></span>
        <span className="slice"></span>
        <span className="slice"></span>
        <span className="slice"></span>
        <span className="slice"></span>
        <span className="slice"></span>
      </div>
    </div>
  );
};

export default Mainloader;
