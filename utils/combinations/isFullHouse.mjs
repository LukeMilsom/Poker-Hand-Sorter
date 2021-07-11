import { isMatchingCardNumbers } from "../commonUtilities.mjs";

export const isFullHouse = (cardNumbers) => {
  const matchAmount = 3;
  let hasThreeMatchingCards = false;
  let hasAPair = false;
  let checkPair = [];

  cardNumbers.forEach((cardNumber) => {
    if (isMatchingCardNumbers(cardNumbers, matchAmount, cardNumber)) {
      hasThreeMatchingCards = true;
    } else {
      checkPair = [...checkPair, cardNumber];
    }
  });

  hasAPair = checkPair[0] === checkPair[1];

  return hasAPair && hasThreeMatchingCards;
};
