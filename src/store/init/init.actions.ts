import { InitAppAction, INIT_APP } from "./init.types";

export const initApp = (): InitAppAction => ({
  type: INIT_APP,
});
