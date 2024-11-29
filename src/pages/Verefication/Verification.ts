import { CardsList } from "./components/cardsList/CardsList";

export const Verification = () => {
  // мой js
  return `
          <div>
            <header> представим что тут есть header</header>
                ${CardsList()}
            <footer>аналогично header</footer>
          </div>
      `;
};
