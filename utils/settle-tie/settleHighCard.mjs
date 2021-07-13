import { checkForPairs, sortByCardNumber } from "../commonUtilities.mjs";
import { ALL_NUMBERS_IN_ORDER_OF_VALUE } from "../../constants/combinations.mjs";

export const settleHighCard = (players) => {
  const sortedCardReference = ALL_NUMBERS_IN_ORDER_OF_VALUE;

  const playerOneSorted = sortByCardNumber(
    players.playerOne.numbers,
    sortedCardReference
  );

  const playerTwoSorted = sortByCardNumber(
    players.playerTwo.numbers,
    sortedCardReference
  );

  for (let i = playerOneSorted.length - 1; i >= 0; i--) {
    if (
      sortedCardReference.indexOf(playerOneSorted[i]) >
      sortedCardReference.indexOf(playerTwoSorted[i])
    ) {
      return "player_one";
    }
    if (
      sortedCardReference.indexOf(playerTwoSorted[i]) >
      sortedCardReference.indexOf(playerOneSorted[i])
    ) {
      return "player_two";
    }
  }
};
