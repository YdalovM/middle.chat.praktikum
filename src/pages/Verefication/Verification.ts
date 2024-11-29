import { CardsList } from "./components/cardsList/CardsList";
import { CustomLink } from "../../components/CustomLink/CustomLik";
import { Button } from "../../components/Button/Button";

export const Verification = () => {
  // мой js
  return `
          <div>
            <header> представим что тут есть header и это тоже компонент</header>
                ${CardsList()}
                <div>
                    <span>В принципе их сожно выводить циклом, но пока излишество</span>
                    ${Button()} 
                    ${Button()}
                </div>
                ${CustomLink("/verification")}
            <footer>аналогично header</footer>
          </div>
      `;
};
