import { ROYAL_NUMBERS } from "../../constants/combinations.mjs";
import { suitMatch } from "../commonUtilities.mjs";

export const isRoyalFlush = (cardNumbers, cardSuits, tie) => {
  const royalNumberMatch = cardNumbers.every((elem) =>
    ROYAL_NUMBERS.includes(elem)
  );

  return tie ? console.log("hi") : royalNumberMatch && suitMatch(cardSuits);
};
