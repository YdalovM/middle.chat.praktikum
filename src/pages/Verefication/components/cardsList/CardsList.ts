import { MOCK_CARD_LIST } from "../../const";
import { ICard } from "../../types";
import { Card } from "../card/Card";

export const CardsList = () => {
  return `
        <div>
            <h2>представим что тут тоже есть что то типо описания</h2>
            <div>
                ${MOCK_CARD_LIST.map((card: ICard) => Card(card)).join("")}
            </div>
        </div>
    `;
};
