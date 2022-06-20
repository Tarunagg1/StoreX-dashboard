// Layout Types
import Home from '../views/Home';
import Login from '../views/Login';
import Register from '../views/Register';

// Route Views


export default [
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

];
