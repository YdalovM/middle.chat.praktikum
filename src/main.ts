import { navigateToErrorPage, routers } from "./navigate.ts";
import { renderTemplate } from "./template/renderTemplate.ts";
import { EERRORS } from "./types/general.ts";

export const render = async () => {
  let content = await routers();
  if (!content) content = await navigateToErrorPage(EERRORS.NOT_FOUND);

  renderTemplate(content!);
};

render();
