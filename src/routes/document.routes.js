
// Route Views
import Login from '../views/Login';

export default [
    {
        path: "/documentation",
        component: Login,
        routeGuard: 'NoAuthGuard'
    }
];
