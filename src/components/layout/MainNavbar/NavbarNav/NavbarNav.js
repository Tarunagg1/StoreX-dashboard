import React, { Fragment, useState } from "react";
import { Nav } from "shards-react";

import Notifications from "./Notifications";
import UserActions from "./UserActions";
import LoadingBar from 'react-top-loading-bar'


export default () => {
  const [progress, setProgressBar] = useState(50);

  setTimeout(() => {
    setProgressBar(100)
  }, 500);


  return (
    <Fragment>
      <LoadingBar
        color='#f11946'
        progress={progress}
        height={4}
      />
      <Nav navbar className="border-left flex-row">
        {/* <Notifications /> */}
        <UserActions />
      </Nav>
    </Fragment>
  );
}

