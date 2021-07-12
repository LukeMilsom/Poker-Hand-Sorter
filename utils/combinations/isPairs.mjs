import { checkForPairs } from "../commonUtilities.mjs";

export const isPairs = (cardNumbers, pairAmount) => {
  return checkForPairs(cardNumbers).length >= pairAmount;
};
