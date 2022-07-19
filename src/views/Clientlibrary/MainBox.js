import React from "react";
import Editor from '../../components/Editor/Editor';
import "../documentation/home.css";


let code = `const StorxStorage = require('storx-storage-sdk');
const storxStorageFunctions = StorxStorage();

storxStorageFunctions.welcome({
    apiKey: "Your API KEY goes here",
  })
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });`;

export default function MainBox() {
  return (
    <div className="main-box">
      <div className="start-para">
        <h4>Node.js client library</h4>
        <p>Use our official Node.js client library to integrate StorX API into your Node.js application without having to make HTTP requests directly.        </p>
        <h4>
          Installation
        </h4>

        <p>You can find the whole list of StorX storage API functions here (link to: <a target="_blank" href="https://github.com/StorXNetwork/storx-storage-sdk">https://github.com/StorXNetwork/storx-storage-sdk</a> )</p>
        <p>
          npm install --save storx-storage-sdk
        </p>
      </div>

      <div className="editorWrappper">
        <Editor code={code} />
      </div>

    </div>
  );
}
