import authState from "./auth/auth.state";
import drawerState from "./drawer/drawer.state";
import localeState from "./locale/locale.state";
import themeState from "./theme/theme.state";

const preloadedState = (async () => {
  return {
    auth: await authState(),
    locale: localeState(),
    theme: themeState(),
    drawer: drawerState(),
  };
})();

export default preloadedState;
