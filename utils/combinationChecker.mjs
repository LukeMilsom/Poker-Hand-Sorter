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

export const combinationChecker = (playerHand) => {
  //definite one loop in refactor
  const cardNumbers = playerHand.map((item) => {
    const numberAndSuit = item.split("");
    return numberAndSuit[0];
  });

  const cardSuits = playerHand.map((item) => {
    const numberAndSuit = item.split("");
    return numberAndSuit[1];
  });

  let rank;

  //console.log(isRoyalFlush(cardNumbers, cardSuits) + "isRoyalFlush");
  //console.log(isStraightFlush(cardNumbers, cardSuits) + "isStraightFlush");
  //console.log(isFourOfAKind(cardNumbers, cardSuits) + "isFourOfAKind");
  //console.log(isFullHouse(cardNumbers) + "isFullHouse");
  //console.log(isFlush(cardSuits) + "isFLush");
  //console.log(isStraight(cardNumbers) + "isStraight");
  //console.log(isThreeOfAKind(cardNumbers) + " is three of a kind");
  //console.log(isPairs(cardNumbers, 2) + "is two pairs");
  //console.log(isPairs(cardNumbers, 1) + "is one pair");
  //console.log(isHighCard(cardNumbers));

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
    default:
      console.log("nothing happend");
  }

  return rank;
};
