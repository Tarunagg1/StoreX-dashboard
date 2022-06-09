
// Route Views
import Credentials from '../views/Credentials';
import Dashboard from '../views/Dashboard';
import Profile from '../views/Profile';

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
    },
    {
        path: "/profile",
        component: Profile,
        routeGuard: 'authGuard'
    }
];
