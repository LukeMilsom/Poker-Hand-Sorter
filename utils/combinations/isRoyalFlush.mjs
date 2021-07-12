import { ROYAL_NUMBERS } from "../../constants/combinations.mjs";
import { suitMatch } from "../commonUtilities.mjs";

export const isRoyalFlush = (cardNumbers, cardSuits) => {
  const royalNumberMatch = cardNumbers.every((elem) =>
    ROYAL_NUMBERS.includes(elem)
  );
  return royalNumberMatch && suitMatch(cardSuits);
};
