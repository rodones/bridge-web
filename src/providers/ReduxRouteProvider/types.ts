import { ComponentType } from "react";

type Role = "UNAUTHENTICATED" | "PUBLIC" | "PRIVATE";

export interface DynamicRoute {
  key: string;
  path: string;
  exact?: boolean;
  role?: Role | Role[];
  menu?: boolean;
  menuPath?: string;
  label?: string;
  icon?: React.FunctionComponent<unknown>;
  breadcrumb?: string;
  breadcrumbs?: [string, string][];
  component?: React.LazyExoticComponent<ComponentType<Record<string, unknown>>>;
  render?: (props: Record<string, unknown>) => JSX.Element;
}

export type DynamicNestedRoute = DynamicRoute & {
  routes?: (DynamicRoute | DynamicNestedRoute)[];
};
