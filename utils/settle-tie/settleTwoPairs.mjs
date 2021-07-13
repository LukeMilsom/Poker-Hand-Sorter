import { checkForPairs, sortAndSettleHighCard } from "../commonUtilities.mjs";

export const settleTwoPairs = (players) => {
  const playerOnePair = checkForPairs(players.playerOne.numbers);
  const playerTwoPair = checkForPairs(players.playerTwo.numbers);

  return sortAndSettleHighCard(playerOnePair, playerTwoPair);
};
