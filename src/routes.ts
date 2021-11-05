import { lazy } from "react";
import { DynamicNestedRoute } from "./providers/ReduxRouteProvider/types";
import nodeRoutes from "./pages/Node/Node.routes";

const routes: DynamicNestedRoute[] = [
  {
    key: "home",
    path: "/",
    exact: true,
    role: "PUBLIC",
    component: lazy(() => import("./pages/Home")),
  },
  {
    key: "login",
    path: "/login",
    role: "UNAUTHENTICATED",
    component: lazy(() => import("./pages/Login")),
  },
  ...nodeRoutes,
  {
    key: "page404",
    path: "*",
    role: "PUBLIC",
    component: lazy(() => import("./pages/NotFound")),
  },
];

export default routes;
