export const CHANGE_BREADCRUMBS = "CHANGE_BREADCRUMBS";

export interface BreadcrumbAction {
  type: typeof CHANGE_BREADCRUMBS;
  payload: [string, string][];
}

export type BreadcrumbState = [string, string][];
