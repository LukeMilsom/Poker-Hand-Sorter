import { ALL_NUMBERS_IN_ORDER_OF_VALUE } from "../../constants/combinations.mjs";
import { sortByCardNumber } from "../commonUtilities.mjs";

export const isHighCard = (cardNumbers) => {
  const referenceArray = ALL_NUMBERS_IN_ORDER_OF_VALUE;
  const sortedArray = sortByCardNumber(cardNumbers, referenceArray);

  return true;
};
