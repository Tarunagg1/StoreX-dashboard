
// Route Views
import Credentials from '../views/Credentials';
import Dashboard from '../views/Dashboard';

export default [
    {
        path: "/dashboard",
        component: Dashboard,
        routeGuard: 'authGuard'
    },
    {
        path: "/credentials",
        component: Credentials,
        routeGuard: 'authGuard'
    }
];
