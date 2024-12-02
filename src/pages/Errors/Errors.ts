import { TEXT_ERRORS_LIST } from "./const";
import { navigate } from "../../navigate";
import { EPATHS } from "../../types/general";
import styles from "./styles.module.scss";

export const Error = () => {
  const error = window.location.pathname;
  const error_code = error.slice(1);
  const TEXT_ERROR = TEXT_ERRORS_LIST.get(error_code);

  setTimeout(() => {
    const btn = document.querySelector(`.${styles.error_link}`);

    if (!btn) return;

    btn.addEventListener("click", () => {
      navigate(EPATHS.LOGIN);
    });
  });

  return `
    <div class="${styles.error} ${styles[error_code]}">
      <h1 class="${styles.error_title}">${TEXT_ERROR?.title}</h1>
      <span class="${styles.error_description}">${TEXT_ERROR?.text}</span>
      <span class="${styles.error_link}">Назад к чатам</span>
    </div>
  `;
};
