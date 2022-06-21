
// Route Views
import Documentation from '../views/documentation/Documentation';

export default [
    {
        path: "/documentation",
        component: Documentation,
        routeGuard: 'NoAuthGuard'
    }
];
