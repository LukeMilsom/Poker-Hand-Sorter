import {
  isFourOfAKind,
  isFullHouse,
  isRoyalFlush,
  isStraightFlush,
  isFlush,
  isStraight,
} from "./combinations/index.mjs";

import {
  checkIfConsecutiveCards,
  sortByCardNumber,
} from "./commonUtilities.mjs";
import { ALL_NUMBERS_IN_ORDER_OF_VALUE } from "../constants/combinations.mjs";

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

  //console.log(isRoyalFlush(cardNumbers, cardSuits) + "isRoyalFlush");
  //console.log(isStraightFlush(cardNumbers, cardSuits) + "isStraightFlush");
  //console.log(isFourOfAKind(cardNumbers, cardSuits) + "isFourOfAKind");
  //console.log(isFullHouse(cardNumbers) + "isFullHouse");
  //console.log(isFlush(cardSuits) + "isFLush");
  //console.log(isStraight(cardNumbers) + "isStraight");

  //Three cards of the same value
  const threeOfAKind = () => {};

  //switch (playerHand) {
  //  case isRoyalFlush(cardNumbers, cardSuits):
  //    //return value
  //    break;
  //  case isStraightFlush(cardNumbers, cardSuits):
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
