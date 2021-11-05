import { lazy } from "react";
import { DynamicNestedRoute } from "../../providers/ReduxRouteProvider/types";

const nodeRoutes: DynamicNestedRoute[] = [
  {
    key: "nodes",
    path: "/nodes",
    exact: true,
    menu: true,
    icon: lazy(() => import("@mui/icons-material/Notifications")),
    label: "pages.nodes",
    breadcrumb: "pages.nodes",
    component: lazy(() => import("./NodeList")),
    routes: [
      {
        key: "node",
        path: "/:id(\\d+)",
        exact: true,
        breadcrumb: "pages.nodes.node",
        component: lazy(() => import("./NodeDetails")),
      },
    ],
  },
];

export default nodeRoutes;
