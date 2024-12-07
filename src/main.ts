import { navigateToErrorPage, routers } from "./navigate.ts";
import { renderTemplate } from "./template/renderTemplate.ts";
import { EERRORS } from "./types/general.ts";
import "./main.scss";

export const render = () => {
  let content = routers();
  if (!content) content = navigateToErrorPage(EERRORS.NOT_FOUND);

  renderTemplate(content!);
};

window.addEventListener("DOMContentLoaded", () => {
  render();
});
