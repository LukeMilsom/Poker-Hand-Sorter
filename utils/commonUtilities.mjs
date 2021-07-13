import { ALL_NUMBERS_IN_ORDER_OF_VALUE } from "../constants/combinations.mjs";

//---Check if all suits in a hand match---
export const suitMatch = (cardSuit) => {
  return cardSuit.every((suit) => suit === cardSuit[0]);
};

//--Sort the cards lowest to highest by card number value---
export const sortByCardNumber = (cards, sortBy) => {
  var itemsOrdered = [];
  for (var i = 0; i < sortBy.length; i++) {
    if (cards.indexOf(sortBy[i]) > -1) {
      itemsOrdered.push(sortBy[i]);
    }
  }
  return itemsOrdered;
};

//--Check if all 5 cards are in consecutive order---
export const checkIfConsecutiveCards = (
  cardNumbers,
  sortedCards,
  checkReference
) => {
  const indexOfFirstElement = checkReference.indexOf(sortedCards[0]);

  const checkToIndex = indexOfFirstElement + 5;

  const checkTheseElements = checkReference.slice(
    indexOfFirstElement,
    checkToIndex
  );

  return (
    sortedCards.length === 5 &&
    cardNumbers.every((elem) => checkTheseElements.includes(elem))
  );
};

//--Check if there is X or more matching card numbers in hand---
export const isMatchingCardNumbers = (arr, matchAmount, matchCheck) => {
  return arr.filter((item) => item === matchCheck).length >= matchAmount;
};

//Check for pairs in a hand(Return array of pairs in a hand)
export const checkForPairs = (arr) => {
  return arr.filter((item, index) => arr.indexOf(item) !== index);
};

//return the numbers in a player hand
export const playerHandCardNumbers = (arr) => {
  return arr.map((item) => {
    const numberAndSuit = item.split("");
    return numberAndSuit[0];
  });
};

//return the suits in a player hand
export const playerHandCardSuits = (arr) => {
  return arr.map((item) => {
    const numberAndSuit = item.split("");
    return numberAndSuit[1];
  });
};

//_______Tie Breakers__________\\
export const usePairTieBreaker = (
  playerOneNumbers,
  playerTwoNumbers,
  matchAmount
) => {
  let playerOneHighCard;
  let playerTwoHighCard;

  for (let i = 0; i < playerOneNumbers.length; i++) {
    if (
      isMatchingCardNumbers(playerOneNumbers, matchAmount, playerOneNumbers[i])
    ) {
      playerOneHighCard = playerOneNumbers[i];
    }
    if (
      isMatchingCardNumbers(playerTwoNumbers, matchAmount, playerTwoNumbers[i])
    ) {
      playerTwoHighCard = playerTwoNumbers[i];
    }
  }
  if (playerOneHighCard > playerTwoHighCard) {
    return "player_one";
  }
  if (playerTwoHighCard > playerOneHighCard) {
    return "player_two";
  }
  return false;
};

//basic sort and settle high card
export const sortAndSettleHighCard = (playerOne, playerTwo) => {
  const sortedCardReference = ALL_NUMBERS_IN_ORDER_OF_VALUE;

  const playerOneHighCard = sortByCardNumber(
    playerOne,
    sortedCardReference
  ).slice(-1)[0];
  const playerTwoHighCard = sortByCardNumber(
    playerTwo,
    sortedCardReference
  ).slice(-1)[0];

  if (
    sortedCardReference.indexOf(playerOneHighCard) >
    sortedCardReference.indexOf(playerTwoHighCard)
  ) {
    return "player_one";
  }
  if (
    sortedCardReference.indexOf(playerTwoHighCard) >
    sortedCardReference.indexOf(playerOneHighCard)
  ) {
    return "player_two";
  }
  return false;
};
