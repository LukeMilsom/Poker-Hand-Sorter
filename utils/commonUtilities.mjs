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

//check if all 5 cards are in consecutive order---
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

//check if there 2 or more matching card numbers in hand
export const isMatchingCardNumbers = (arr, matchAmount, matchCheck) => {
  return arr.filter((item) => item === matchCheck).length >= matchAmount;
};
