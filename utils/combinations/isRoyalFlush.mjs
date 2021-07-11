import { ROYAL_NUMBERS } from "../../constants/combinations.mjs";
import { suitMatch } from "../commonUtilities.mjs";

export const isRoyalFlush = (cardNumber, cardSuit) => {
  const royalNumberMatch = cardNumber.every((elem) =>
    ROYAL_NUMBERS.includes(elem)
  );
  return royalNumberMatch && suitMatch(cardSuit);
};
