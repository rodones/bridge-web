import { combineReducers } from "redux";

import authReducer from "./auth/auth.reducer";
import breadcrumbsReducer from "./breadcrumbs/breadcrumbs.reducer";
import drawerReducer from "./drawer/drawer.reducer";
import loadingReducer from "./loading/loading.reducer";
import localeReducer from "./locale/locale.reducer";
import themeReducer from "./theme/theme.reducer";
import panicReducer from "./panic/panic.reducer";
import nodeReducer from "./node/node.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  breadcrumbs: breadcrumbsReducer,
  drawer: drawerReducer,
  loading: loadingReducer,
  locale: localeReducer,
  theme: themeReducer,
  panic: panicReducer,
  node: nodeReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
