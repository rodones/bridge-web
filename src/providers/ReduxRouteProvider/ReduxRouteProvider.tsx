import React, { useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { changeDrawerItems } from "../../store/drawer/drawer.actions";

import ReduxRouteWraper from "./ReduxRouteWraper";
import flattenRoutes from "./flattenRoutes";
import { DynamicNestedRoute, DynamicRoute } from "./types";
import { SidebarItem } from "../../store/drawer/drawer.types";

interface ReduxRouteProviderProps {
  routes: DynamicNestedRoute[];
}

const ReduxRouteProvider = ({
  routes,
}: ReduxRouteProviderProps): React.ReactElement => {
  const isLoggedIn = useSelector((state) => state.auth.loggedIn);
  const dispatch = useDispatch();

  const sessionRoutes: DynamicRoute[] = useMemo(
    () =>
      flattenRoutes(routes).filter(({ role }) =>
        role === "UNAUTHENTICATED"
          ? !isLoggedIn
          : role === "PRIVATE" || !role
          ? isLoggedIn
          : true,
      ),
    [routes, isLoggedIn],
  );

  useEffect(() => {
    const items = sessionRoutes
      .filter((route) => route.menu)
      .map(({ key, label, icon, menuPath, path }) => ({
        key,
        label,
        icon,
        path: menuPath || path,
      })) as SidebarItem[];
    dispatch(changeDrawerItems(items));
  }, [sessionRoutes, dispatch]);

  return (
    <Switch>
      {sessionRoutes.map(
        ({
          role,
          render,
          component: RouteComponent,
          breadcrumbs,
          key,
          ...routerProps
        }) => {
          return (
            <Route
              key={key}
              render={(routeProps) => {
                const isPublic =
                  role === undefined || role === "UNAUTHENTICATED";

                if (RouteComponent)
                  return (
                    <ReduxRouteWraper
                      isPublic={isPublic}
                      breadcrumbs={breadcrumbs as [string, string][]}
                    >
                      <RouteComponent {...routeProps} />
                    </ReduxRouteWraper>
                  );

                if (render)
                  return (
                    <ReduxRouteWraper
                      isPublic={isPublic}
                      breadcrumbs={breadcrumbs as [string, string][]}
                    >
                      {render({ ...routeProps })}
                    </ReduxRouteWraper>
                  );

                return null;
              }}
              {...routerProps}
            />
          );
        },
      )}
    </Switch>
  );
};

export default ReduxRouteProvider;
