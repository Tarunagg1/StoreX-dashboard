import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import routes from "./routes/routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/shards-dashboards.1.1.0.min.css";

export default () => (
  <Router>
    <Switch>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        );
      })}
    </Switch>
  </Router>
);
