import { ICard } from "../../types";

export const Card = ({ title, desc }: ICard) => {
  return `
        <div>
            <h3>Название ${title}</h3>
            <span>Описание ${desc}</span>
        </div>
    `;
};
