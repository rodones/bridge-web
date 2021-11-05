import { BreadcrumbAction, CHANGE_BREADCRUMBS } from "./breadcrumbs.types";

export const changeBreadcrumbs = (
  breadcrumbs: [string, string][],
): BreadcrumbAction => ({
  type: CHANGE_BREADCRUMBS,
  payload: breadcrumbs,
});
