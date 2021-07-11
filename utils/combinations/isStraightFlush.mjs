import { ALL_NUMBERS_IN_ORDER_OF_VALUE } from "../../constants/combinations.mjs";
import { suitMatch, sortByCardNumber } from "../commonUtilities.mjs";

export const isStraightFlush = (cardNumber, cardSuit) => {
  const sortedCardReference = ALL_NUMBERS_IN_ORDER_OF_VALUE;

  const sortedCards = sortByCardNumber(cardNumber, sortedCardReference);
  const indexOfFirstNumber = sortedCardReference.indexOf(sortedCards[0]);

  const checkToIndex = indexOfFirstNumber + 5;

  const checkTheseNumbers = sortedCardReference.slice(
    indexOfFirstNumber,
    checkToIndex
  );

  const consecutiveNumberMatch = cardNumber.every((elem) =>
    checkTheseNumbers.includes(elem)
  );

  return consecutiveNumberMatch && suitMatch(cardSuit);
};
