//Ranking ascending order lowest to highest order

//store all combinations, determine which category the players hand fits into, determine who has the highest ranking hand

const COMBINATION_HANDS = [
  {
    rank: 1,
    title: "High card",
    description: "Highest Value Card",
  },
  {
    rank: 2,
    title: "Pair",
    description: "Two cards of same value",
  },
  {
    rank: 3,
    title: "Two pairs",
    description: "Two different pairs",
  },
  {
    rank: 4,
    title: "Three of a kind",
    description: "Three cards of the same value",
  },
  {
    rank: 5,
    title: "Straight",
    description: "All five cards in consecutive value order",
  },
  {
    rank: 6,
    title: "Flush",
    description: "All five cards having the same suit",
  },
  {
    rank: 7,
    title: "Full house",
    description: "Three of a kind and a Pair",
  },

  {
    rank: 8,
    title: "Four of a kind",
    description: "Four cards of the same value",
  },
  {
    rank: 9,
    title: "Straight flush",
    description:
      "All five cards in consecutive value order, with the same suit",
  },
  {
    rank: 10,
    title: "Royal Flush",
    description: "Ten, Jack, Queen, King and Ace in the same suit",
  },
];
