import React from 'react';

const Credentials = React.lazy(() => import('../views/Credentials'));
const Dashboard = React.lazy(() => import('../views/Dashboard'));
const Profile = React.lazy(() => import('../views/Profile'));


const routes = [
  {
    path: "/dashboard",
    component: Dashboard,
    routeGuard: 'authGuard'
  },
  {
    path: "/credentials",
    component: Credentials,
    routeGuard: 'authGuard'
  },
  {
    path: "/profile",
    component: Profile,
    routeGuard: 'authGuard'
  }
];

export default routes;
