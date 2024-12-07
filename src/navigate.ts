import { render } from "./main";
import { Error } from "./pages/Errors/Errors";
import { Verification } from "./pages/Verefication/Verification";

import { EERRORS, EPATHS } from "./types/general";

const ROUTERS = new Map([
  ["/login", Verification],
  ["/register", Verification],
  ["/server_error", Error],
  ["/not_found", Error],
]);

export const routers = () => {
  const pathname = window.location.pathname;

  return ROUTERS.get(pathname);
};

export const navigateToErrorPage = (error: EERRORS) => {
  history.pushState(null, "", error);
  return routers();
};

export const navigate = (path: EPATHS) => {
  history.pushState(null, "", path);
  render();
};
