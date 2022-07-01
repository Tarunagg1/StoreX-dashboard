
// Route Views
import Dashboard from '../views/Dashboard';

export default [
    {
        path: "/credentials",
        component: Dashboard,
        routeGuard: 'authGuard'
    }
];
