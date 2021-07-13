import { sortAndSettleHighCard } from "../commonUtilities.mjs";

export const settleStraightFlush = (players) => {
  const playerTwoNumbers = players.playerTwo.numbers;
  const playerOneNumbers = players.playerOne.numbers;

  return sortAndSettleHighCard(playerOneNumbers, playerTwoNumbers);
};
