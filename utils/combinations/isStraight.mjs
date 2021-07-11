import { ALL_NUMBERS_IN_ORDER_OF_VALUE } from "../../constants/combinations.mjs";
import {
  sortByCardNumber,
  checkIfConsecutiveCards,
} from "../commonUtilities.mjs";

export const isStraight = (cardNumbers) => {
  const sortedCardReference = ALL_NUMBERS_IN_ORDER_OF_VALUE;
  const sortedCards = sortByCardNumber(cardNumbers, sortedCardReference);

  return checkIfConsecutiveCards(cardNumbers, sortedCards, sortedCardReference);
};
