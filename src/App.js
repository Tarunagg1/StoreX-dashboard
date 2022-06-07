import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes/routes";
import { AuthPrivateRoute, GuestPrivateRoute } from './utils/privateRoutes/PrivateRoute';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/shards-dashboards.1.1.0.min.css";

export default () => (
  <Router>
    <Switch>
      {routes.map((route, index) => {
        return (
          route.routeGuard === 'authGuard' ?
            <AuthPrivateRoute path={route.path} exact={route.exact} component={route.component} /> :
            route.routeGuard === 'Guestroute' ? <GuestPrivateRoute path={route.path} exact={route.exact} component={route.component} /> :
              <Route path={route.path} exact={route.exact} component={route.component} />
        );
      })}
    </Switch>
  </Router>
);
