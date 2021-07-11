import { isRoyalFlush, isStraightFlush } from "./combinations/index.mjs";

export const combinationChecker = (playerHand) => {
  //definite one loop in refactor
  const cardNumber = playerHand.map((item) => {
    const numberAndSuit = item.split("");
    return numberAndSuit[0];
  });

  const cardSuit = playerHand.map((item) => {
    const numberAndSuit = item.split("");
    return numberAndSuit[1];
  });

  //move these to new file

  console.log(isRoyalFlush(cardNumber, cardSuit) + "isRoyalFlush");
  console.log(isStraightFlush(cardNumber, cardSuit) + "isStraightFlush");

  //switch (playerHand) {
  //  case isRoyalFlush(cardNumber, cardSuit):
  //    //return value
  //    break;
  //  case isStraightFlush(cardNumber, cardSuit):
  //    //return value
  //    break;
  //  case isFourOfAKind:
  //    //return value
  //    break;
  //  case isFullHouse:
  //    //return value
  //    break;
  //  case isFlush:
  //    //return value
  //    break;
  //  case isStraight:
  //    //return value
  //    break;
  //  case isThreeOfAKind:
  //    //return value
  //    break;
  //  case isTwoPairs:
  //    //return value
  //    break;
  //  case isPair:
  //    //return value
  //    break;
  //  case isHighCard:
  //    //return value
  //    break;
  //  default:
  //    isHighCard;
  //}
};
