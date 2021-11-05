import { DynamicNestedRoute, DynamicRoute } from "./types";

function preorderTraverse(
  routes: DynamicNestedRoute[] | DynamicNestedRoute,
  result: DynamicRoute[],
  parentPaths: string[] = [],
  parentBreadcumbs: [string, string][] = [],
) {
  if (Array.isArray(routes)) {
    routes.forEach((route) =>
      preorderTraverse(route, result, parentPaths, parentBreadcumbs),
    );
  } else if (routes.routes) {
    const { routes: nextRoute, breadcrumb, path, ...route } = routes;

    if (!route.component && !route.render)
      throw new Error("Route must have either render or component property.");

    if (route.component && route.render)
      throw new Error(
        "Route must not have render and component property at the same time.",
      );

    const mergedPath = parentPaths
      .concat(path)
      .join("/")
      .replace(/\/{2,}/g, "/");

    result.push({
      ...route,
      breadcrumbs: breadcrumb
        ? parentBreadcumbs.concat([[breadcrumb, mergedPath]])
        : parentBreadcumbs,
      path: mergedPath,
    });

    parentPaths.push(routes.path);
    parentBreadcumbs.push([routes.breadcrumb as string, mergedPath]);

    preorderTraverse(
      nextRoute as DynamicNestedRoute[],
      result,
      parentPaths,
      parentBreadcumbs,
    );

    parentPaths.pop();
    parentBreadcumbs.pop();
  } else {
    const path = parentPaths
      .concat(routes.path)
      .join("/")
      .replaceAll(/\/{2,}/g, "/");

    result.push({
      ...routes,
      breadcrumbs: routes.breadcrumb
        ? parentBreadcumbs.concat([[routes.breadcrumb, path]])
        : parentBreadcumbs,
      path,
    });
  }
}

function flattenRoutes(routes: DynamicNestedRoute[]): DynamicRoute[] {
  const result: DynamicRoute[] = [];
  preorderTraverse(routes, result);
  return result;
}

export default flattenRoutes;
