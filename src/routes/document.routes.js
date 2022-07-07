// Route Views
import Documentation from "../views/documentation/Documentation";
import GetStarted from "../views/GettingStarted";
import Authentication from "../views/Authentication";

export default [
  {
    path: "/documentation",
    component: Documentation,
    routeGuard: "NoAuthGuard"
  },
  {
    path: "/get-started",
    component: GetStarted,
    routeGuard: "NoAuthGuard"
  },
  {
    path: "/authentication",
    component: Authentication,
    routeGuard: "NoAuthGuard"
  },
  {
    path: "/endpoints",
    component: Documentation,
    routeGuard: "NoAuthGuard"
  },
  {
    path: "/client-libraries",
    component: Documentation,
    routeGuard: "NoAuthGuard"
  },
  {
    path: "/client-libraries/node",
    component: Documentation,
    routeGuard: "NoAuthGuard"
  }
];
