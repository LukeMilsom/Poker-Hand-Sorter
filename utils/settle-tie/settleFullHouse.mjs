import { usePairTieBreaker } from "../commonUtilities.mjs";

export const settleFullHouse = (players) => {
  const matchAmount = 3;

  const playerOneNumbers = players.playerOne.numbers;
  const playerTwoNumbers = players.playerTwo.numbers;

  return usePairTieBreaker(playerOneNumbers, playerTwoNumbers, matchAmount);
};
