import "./index.css";
import ReactDOM from "react-dom";
import { Suspense, StrictMode } from "react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";

import store from "./store";
import history from "./history";
import locales from "./locales";
import themes from "./themes";
import routes from "./routes";

import {
  ReduxIntlProvider,
  ReduxThemeProvider,
  ReduxRouteProvider,
} from "./providers";
import { Loading, ErrorBoundary } from "./components";

async function init() {
  ReactDOM.render(
    <StrictMode>
      <Provider store={await store}>
        <ReduxIntlProvider locales={locales}>
          <ReduxThemeProvider themes={themes}>
            <ErrorBoundary>
              <Suspense fallback={<Loading fullscreen />}>
                <Router history={history}>
                  <App>
                    <ReduxRouteProvider routes={routes} />
                  </App>
                </Router>
              </Suspense>
            </ErrorBoundary>
          </ReduxThemeProvider>
        </ReduxIntlProvider>
      </Provider>
    </StrictMode>,
    document.getElementById("root"),
  );
}

init();
