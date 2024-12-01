import { TEXT_ERRORS_LIST } from "./const";
import { navigate } from "../../navigate";
import { EPATHS } from "../../types/general";

export const Error = () => {
  const error = window.location.pathname;
  const TEXT_ERROR = TEXT_ERRORS_LIST.get(error.slice(1));

  setTimeout(() => {
    const btn = document.querySelector(".error-link");
    if (!btn) return;
    console.log(123);

    btn.addEventListener("click", () => {
      navigate(EPATHS.VEREFICATION);
    });
  }, 0);

  return `
    <div class="error">
      <h1 class="error-title">${TEXT_ERROR?.title}</h1>
      <p class="error-description" onclick="nav()">${TEXT_ERROR?.text}</p>
      <button class="error-link">Назад к чатам</button>
    </div>
  `;
};
