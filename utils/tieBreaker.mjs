import {
  isFourOfAKind,
  isFullHouse,
  isRoyalFlush,
  isStraightFlush,
  isFlush,
  isStraight,
  isThreeOfAKind,
  isPairs,
  isHighCard,
} from "./combinations/index.mjs";

export const tieBreaker = (playerHand) => {
  //definite one loop in refactor
  const cardNumbers = playerHand.map((item) => {
    const numberAndSuit = item.split("");
    return numberAndSuit[0];
  });

  const cardSuits = playerHand.map((item) => {
    const numberAndSuit = item.split("");
    return numberAndSuit[1];
  });

  let winner;

  switch (true) {
    case isRoyalFlush(cardNumbers, cardSuits):
      rank = 10;
      break;
    case isStraightFlush(cardNumbers, cardSuits):
      rank = 9;
      break;
    case isFourOfAKind(cardNumbers):
      rank = 8;
      break;
    case isFullHouse(cardNumbers):
      rank = 7;
      break;
    case isFlush(cardSuits):
      rank = 6;
      break;
    case isStraight(cardNumbers):
      rank = 5;
      break;
    case isThreeOfAKind(cardNumbers):
      rank = 4;
      break;
    case isPairs(cardNumbers, 2):
      rank = 3;
      break;
    case isPairs(cardNumbers, 1):
      rank = 2;
      break;
    case isHighCard(cardNumbers):
      rank = 1;
      break;
    default:
      console.log("you gave me some invalid data");
  }

  return rank;
};
