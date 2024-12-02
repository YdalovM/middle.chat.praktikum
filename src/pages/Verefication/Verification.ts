import { VerificationInputsList } from "./components/verificationInputsList/verificationInputsList";
import { VERIFICATION_CONTENT } from "./const";
import styles from "./styles.module.scss";
import inputStyles from "./components/verificationInput/styles.module.scss";

export const Verification = () => {
  const pathname = window.location.pathname;

  const { title, button_text, link_text, link_path, inputs } =
    VERIFICATION_CONTENT[pathname];
  console.log(inputs);

  setTimeout(() => {
    const input = document.querySelector(`.${inputStyles.input}`);
    console.log(input);

    document.addEventListener("change", () => {});
    const form = document.querySelector(
      `.${styles.verification__card__form} `
    ) as HTMLFormElement;

    console.log(form, 12, styles.verification__card__form);
    const formData = new FormData(form);
    console.log(formData.get("login"));
    if (!form) return;
  }, 2210);

  return `
    <div class="${styles.verification}">
      <div class="${styles.verification__card}">
        <h1 class="${styles.verification__card_title}">${title}</h1>
        <form class="${styles.verification__card__form}">
            ${VerificationInputsList(inputs)}
            <button 
              class="${styles.verification__card__buttons_button}">
              ${button_text}
            </button>
        </form>
        <a 
          class="${styles.verification__card__buttons_link}"
          href="${link_path}">
          ${link_text}
        </a>
      </div>
    </div>
  `;
};
