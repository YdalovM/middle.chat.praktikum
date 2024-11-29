import { setupCounter } from "./counter.ts";
import { Verification } from "./pages/Verefication/Verification.ts";

const ROUTERS = new Map([["/verification", Verification]]);

// представим что тут волидации на не корректную страницу
const navigateToErrorPage = () => {
  history.pushState(null, "", "verification");
  renderComponent(Verification);
};

const curentContent = async () => {
  const content = await ROUTERS.get(window.location.pathname);

  if (!content) return navigateToErrorPage();

  renderComponent(content);
};

const renderComponent = (content: () => void) => {
  document.querySelector<HTMLDivElement>("#app")!.innerHTML = `${content()}`;
};

curentContent();

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
