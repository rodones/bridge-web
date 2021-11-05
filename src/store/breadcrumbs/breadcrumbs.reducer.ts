import {
  CHANGE_BREADCRUMBS,
  BreadcrumbAction,
  BreadcrumbState,
} from "./breadcrumbs.types";

const breadcrumbsReducer = (
  state: BreadcrumbState = [],
  action: BreadcrumbAction,
): BreadcrumbState => {
  switch (action.type) {
    case CHANGE_BREADCRUMBS:
      return action.payload;
    default:
      return state;
  }
};

export default breadcrumbsReducer;
