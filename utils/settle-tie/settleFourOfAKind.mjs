import { usePairTieBreaker } from "../commonUtilities.mjs";

export const settleFourOfAKind = (players) => {
  const matchAmount = 4;

  const playerOneNumbers = players.playerOne.numbers;
  const playerTwoNumbers = players.playerTwo.numbers;

  return usePairTieBreaker(playerOneNumbers, playerTwoNumbers, matchAmount);
};
