import { ALL_NUMBERS_IN_ORDER_OF_VALUE } from "../../constants/combinations.mjs";
import { sortByCardNumber } from "../commonUtilities.mjs";

//same as straight flush

export const settleStraight = (players) => {
  const sortedCardReference = ALL_NUMBERS_IN_ORDER_OF_VALUE;
  const playerOneHighCard = sortByCardNumber(
    players.playerOne.numbers,
    sortedCardReference
  ).slice(-1)[0];

  const playerTwoHighCard = sortByCardNumber(
    players.playerTwo.numbers,
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
