import React from 'react';
import Clientlibrary from '../views/Clientlibrary';
import Endpoints from '../views/Endpoints';

const GetStarted = React.lazy(() => import('../views/GettingStarted'));
const Documentation = React.lazy(() => import('../views/documentation/Documentation'));
const Authentication = React.lazy(() => import('../views/Authentication'));

let routes = [
  {
    path: "/documentation",
    component: Documentation,
    routeGuard: "NoAuthGuard"
  },
  {
    path: "/get-started",
    component: GetStarted,
    routeGuard: "NoAuthGuard"
  },
  {
    path: "/authentication",
    component: Authentication,
    routeGuard: "NoAuthGuard"
  },
  {
    path: "/endpoints",
    component: Endpoints,
    routeGuard: "NoAuthGuard"
  },
  {
    path: "/client-libraries",
    component: Clientlibrary,
    routeGuard: "NoAuthGuard"
  },
  {
    path: "/client-libraries/node",
    component: Clientlibrary,
    routeGuard: "NoAuthGuard"
  }
];
export default routes;