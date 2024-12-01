import { VERIFICATION_CONTENT } from "./const";
import styles from "./styles.module.scss";

export const Verification = () => {
  const pathname = window.location.pathname;

  const { title, button_text, link_text, link_path, inputs } =
    VERIFICATION_CONTENT[pathname];
  console.log(inputs);

  return `
    <div class="${styles.verification}">
      <div class="${styles.verification__card}">
        <h1 class="${styles.verification__card_title}">${title}</h1>
        <form class="${styles.verification__card__inputs}">
          ${inputs
            .map(
              ({ type, placeholder, name }) => `
              <input 
                class="${styles.verification__card__inputs_input}" 
                type="${type}" 
                placeholder="${placeholder}" 
                name="${name}" 
              />
            `
            )
            .join("")}
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
