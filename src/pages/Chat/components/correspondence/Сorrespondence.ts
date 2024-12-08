import { CorrespondenceFooter } from "./components/correspondenceFooter/correspondenceFooter";
import { CorrespondenceHeader } from "./components/correspondenceHeader/CorrespondenceHeader";
import styles from "./styles.module.scss";

export const Correspondence = () => {
  return `
    <div class="${styles.correspondence}">
      ${CorrespondenceHeader("", "Андрей")}
      correspondence
      ${CorrespondenceFooter()}
    </div>`;
};
