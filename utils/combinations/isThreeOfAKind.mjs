import { isMatchingCardNumbers } from "../commonUtilities.mjs";

export const isThreeOfAKind = (cardNumbers) => {
  const matchAmount = 3;
  let hasThreeMatchingCards = false;

  cardNumbers.forEach((cardNumber) => {
    if (isMatchingCardNumbers(cardNumbers, matchAmount, cardNumber)) {
      hasThreeMatchingCards = true;
    }
  });
  return hasThreeMatchingCards;
};
