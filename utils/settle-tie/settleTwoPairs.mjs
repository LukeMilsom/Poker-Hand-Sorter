import { checkForPairs, sortByCardNumber } from "../commonUtilities.mjs";
import { ALL_NUMBERS_IN_ORDER_OF_VALUE } from "../../constants/combinations.mjs";

export const settleTwoPairs = (players) => {
  const sortedCardReference = ALL_NUMBERS_IN_ORDER_OF_VALUE;

  const playerOnePair = checkForPairs(players.playerOne.numbers);
  const playerTwoPair = checkForPairs(players.playerTwo.numbers);

  const playerOneHighCard = sortByCardNumber(
    playerOnePair,
    sortedCardReference
  ).slice(-1)[0];

  const playerTwoHighCard = sortByCardNumber(
    playerTwoPair,
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
