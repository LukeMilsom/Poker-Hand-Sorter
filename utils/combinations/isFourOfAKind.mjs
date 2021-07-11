import { isMatchingCardNumbers } from "../commonUtilities.mjs";

export const isFourOfAKind = (cardNumbers) => {
  const matchAmount = 4;
  let isFourOfAKind = false;

  cardNumbers.forEach((cardNumber) => {
    if (isMatchingCardNumbers(cardNumbers, matchAmount, cardNumber)) {
      isFourOfAKind = true;
    }
  });
  return isFourOfAKind;
};
