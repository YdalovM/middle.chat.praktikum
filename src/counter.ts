import { flatten } from "lodash-es";

export function setupCounter(element: HTMLButtonElement) {
  let counter = 0;
  console.log(flatten([[[1, 2, 3, 4, 5]]]));
  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}
