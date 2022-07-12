import React, { Fragment, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes/routes";
import {
  AuthPrivateRoute,
  GuestPrivateRoute
} from "./utils/privateRoutes/PrivateRoute";

import { useDispatch, useSelector } from "react-redux";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/shards-dashboards.1.1.0.min.css";
import { isuserLogiIn } from "./redux/actions/auth.Actions";
import Mainloader from './components/Mainloader.js';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const App = () => {
  const dispatch = useDispatch();
  const au = useSelector(state => state.Auth);

  useEffect(() => {
    if (!au.isAuthencated) {
      dispatch(isuserLogiIn());
    }
  }, []);

  return (
    <Suspense fallback={<Mainloader />}>
      <Fragment>
        <ToastContainer />
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
    </Suspense>
  );
};

export default App;
