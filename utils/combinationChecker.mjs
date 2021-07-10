import {
  ROYAL_NUMBERS,
  ALL_NUMBERS_IN_ORDER_OF_VALUE,
} from "../constants/combinations.mjs";
import { suitMatch, sortByCardNumber } from "./commonUtilities.mjs";

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

  const isRoyalFlush = (cardNumber, cardSuit) => {
    const royalNumberMatch = cardNumber.every((elem) =>
      ROYAL_NUMBERS.includes(elem)
    );
    return royalNumberMatch && suitMatch(cardSuit);
  };

  const isStraightFlush = (cardNumber, cardSuit) => {
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
