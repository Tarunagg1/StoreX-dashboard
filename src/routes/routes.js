
// Route Views
import Errors from "../views/Errors";
import AuthRoutes from './auth.routes';
import dashboardRoutes from './dashboard.routes';
import documentRoutes from './document.routes';



let routes = [
  ...AuthRoutes,
  ...dashboardRoutes,
  ...documentRoutes,
  {
    path: "*",
    component: Errors,
  }
];


export default routes;