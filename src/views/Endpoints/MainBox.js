import React from "react";
import Editor from '../../components/Editor/Editor';
import "../documentation/home.css";
import './api.css';

let GETFOLDER = `var myHeaders = new Headers();
myHeaders.append("Authorization", "{{Authorization}}");

var urlencoded = new URLSearchParams();

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

fetch("https://storx.io/api/storage/folder/2214", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));`;

const POSTFOLDER = `var myHeaders = new Headers();
myHeaders.append("authorization", "{{Authorization}}");

var urlencoded = new URLSearchParams();
urlencoded.append("folderName", "SubFolderbyPostman");
urlencoded.append("parentFolderId", "4776");
urlencoded.append("teamId", "");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

fetch("https://storx.io/api/storage/folder", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));`;


export default function MainBox() {
  return (
    <div className="main-box">
      <div className="start-para">
        <h4>STORX Api Endpoints</h4>
        <p>Use our official StorX API is a simple HTTP REST API for uploading, fetching, downloading and updating all your files and folders in you StorX account.
        </p>
      </div>

      <div className="apiMainBox">
        <div className="apileft">
          <div className="urls">
            <span className='title'>GET</span>
            <span className='urldesc'>https://storx.io/api/storage/folder/2214</span>
          </div>

          <p className='urlCard'>https://storx.io/api/storage/folder/2214</p>

          <div className="dataBody">
            <div className="request_body">

              <div className="bodytitle">
                <span className="bodybody">HEADERS</span>
                {/* <span className='bodyurlcoded'>urlencoded</span> */}
              </div>

              <div className="bodytablestyle">
                <div className="keystyle">Authorization</div>
                <div className="keyvalue">AuthorizationToken</div>
              </div>
            </div>
          </div>
        </div>
        <div className="apiright">
          <Editor code={GETFOLDER} />
        </div>
      </div>
      <div className="apiMainBox">
        <div className="apileft">
          <div className="urls">
            <span className='title'>POST</span>
            <span className='urldesc'>https://storx.io/api/storage/folder</span>
          </div>

          <p className='urlCard'>https://storx.io/api/storage/folder</p>

          <div className="dataBody">
            <div className="request_body">

              <div className="bodytitle">
                <span className="bodybody">HEADERS</span>
              </div>

              <div className="bodytablestyle">
                <div className="keystyle">Authorization</div>
                <div className="keyvalue">AuthorizationToken</div>
              </div>

              <div className="bodytitle">
                <span className="bodybody">PARAMS</span>
              </div>

              <div className="bodytablestyle">
                <div className="keystyle">Content-Type</div>
                <div className="keyvalue">application/x-www-form-urlencoded</div>
              </div>

              
              <div className="bodytitle">
                <span className="bodybody">BODY</span>
                <span className="bodyurlcoded">urlencoded</span>
              </div>
              <div className="bodytablestyle">
                <div className="keystyle">folderName</div>
                <div className="keyvalue">SubFolderbyPostman</div>
              </div>

              <div className="bodytablestyle">
                <div className="keystyle">parentFolderId</div>
                <div className="keyvalue">4776</div>
              </div>

              <div className="bodytablestyle">
                <div className="keystyle">teamId</div>
              </div>

            </div>
          </div>
        </div>
        <div className="apiright">
          <Editor code={POSTFOLDER} />
        </div>
      </div>
      
    </div>
  );
}
