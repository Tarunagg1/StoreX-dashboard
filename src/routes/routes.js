import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import Dashboard from '../views/Dashboard';

// Route Views
import Errors from "../views/Errors";
import AuthRoutes from './auth.routes';
import dashboardRoutes from './dashboard.routes';


export default [
  ...AuthRoutes,
  ...dashboardRoutes,
  {
    path: "*",
    component: Errors,
  }
];
