import React from 'react';

const Home = React.lazy(() => import('../views/Home'));
const Login = React.lazy(() => import('../views/Login'));
const Register = React.lazy(() => import('../views/Register'));
const ResetPassword = React.lazy(() => import('../views/Resetpassword'));

// Route Views


const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
    routeGuard: 'NoAuthGuard'
    },
  {
    path: "/login",
    exact: true,
    component: Login,
    routeGuard: 'Guestroute'
    },
  {
    path: "/register",
    component: Register,
    exact: true,
    routeGuard: 'Guestroute'
    },
  {
    path: "/forgotpassword",
    exact: true,
    component: ResetPassword,
    routeGuard: 'Guestroute'
    },

];


export default routes;
