
// Route Views
import Dashboard from '../views/Dashboard';

export default [
    {
        path: "/dashboard",
        component: Dashboard,
        routeGuard: 'authGuard'
    }
];
