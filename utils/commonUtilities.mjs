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
