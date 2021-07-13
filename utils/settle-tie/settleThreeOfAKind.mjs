import { isMatchingCardNumbers } from "../commonUtilities.mjs";

export const settleThreeOfAKind = (players) => {
  //same as full house
  const matchAmount = 3;

  const playerOneNumbers = players.playerOne.numbers;
  const playerTwoNumbers = players.playerTwo.numbers;

  let playerOneHighCard;
  let playerTwoHighCard;

  for (let i = 0; i < playerOneNumbers.length; i++) {
    if (
      isMatchingCardNumbers(playerOneNumbers, matchAmount, playerOneNumbers[i])
    ) {
      playerOneHighCard = playerOneNumbers[i];
    }
    if (
      isMatchingCardNumbers(playerTwoNumbers, matchAmount, playerTwoNumbers[i])
    ) {
      playerTwoHighCard = playerTwoNumbers[i];
    }
  }
  if (playerOneHighCard > playerTwoHighCard) {
    return "player_one";
  }
  if (playerTwoHighCard > playerOneHighCard) {
    return "player_two";
  }
  return false;
};
