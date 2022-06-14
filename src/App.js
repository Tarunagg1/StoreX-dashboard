import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes/routes";
import { AuthPrivateRoute, GuestPrivateRoute } from './utils/privateRoutes/PrivateRoute';

import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import './App.css';


import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/shards-dashboards.1.1.0.min.css";


const options = {
  timeout: 5000,
  position: positions.TOP_RIGHT
};

export default () => (
  <Provider template={AlertTemplate} {...options}>
    <Fragment>
      <Router>
        <Switch>
          {routes.map((route, index) => {
            return (
              route.routeGuard === 'authGuard' ?
                <AuthPrivateRoute key={index} path={route.path} exact={route.exact} component={route.component} /> :
                route.routeGuard === 'Guestroute' ? <GuestPrivateRoute key={index} path={route.path} exact={route.exact} component={route.component} /> :
                  <Route key={index} path={route.path} exact={route.exact} component={route.component} />
            );
          })}
        </Switch>
      </Router>
    </Fragment>
  </Provider>
);
