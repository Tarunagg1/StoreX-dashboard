import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes/routes";
import {
  AuthPrivateRoute,
  GuestPrivateRoute
} from "./utils/privateRoutes/PrivateRoute";

import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/shards-dashboards.1.1.0.min.css";
import { isuserLogiIn } from "./redux/actions/auth.Actions";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_RIGHT
};




const App = () => {
  const dispatch = useDispatch();
  const au = useSelector(state => state.Auth);

  useEffect(() => {
    if (!au.isAuthencated) {
      dispatch(isuserLogiIn());
    }
  }, []);

  return (
    <Provider template={AlertTemplate} {...options}>
      <Fragment>
        <Router>
          <Switch>
            {routes.map((route, index) => {
              return route.routeGuard === "authGuard" ? (
                <AuthPrivateRoute
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              ) : route.routeGuard === "Guestroute" ? (
                <GuestPrivateRoute
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              ) : (
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
      </Fragment>
    </Provider>
  );
};

export default App;
