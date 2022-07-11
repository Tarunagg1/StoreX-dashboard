import React from 'react';

const GetStarted = React.lazy(() => import('../views/GettingStarted'));
const Documentation = React.lazy(() => import('../views/documentation/Documentation'));
const Authentication = React.lazy(() => import('../views/Authentication'));

export default [
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
    component: Documentation,
    routeGuard: "NoAuthGuard"
  },
  {
    path: "/client-libraries",
    component: Documentation,
    routeGuard: "NoAuthGuard"
  },
  {
    path: "/client-libraries/node",
    component: Documentation,
    routeGuard: "NoAuthGuard"
  }
];
