import { sortByCardNumber } from "../commonUtilities.mjs";

export const settleStraightFlush = (players, arrayRef) => {
  const playerOneNumbers = sortByCardNumber(
    players.playerOne.numbers,
    arrayRef
  );
  const playerTwoNumbers = sortByCardNumber(
    players.playerTwo.numbers,
    arrayRef
  );

  const playerOneHighCard = playerOneNumbers.slice(-1)[0];
  const playerTwoHighCard = playerTwoNumbers.slice(-1)[0];

  const playerOneScore = arrayRef.indexOf(playerOneHighCard);
  const playerTwoScore = arrayRef.indexOf(playerTwoHighCard);

  if (playerOneScore > playerTwoScore) {
    return "player_one";
  }
  if (playerTwoScore > playerOneScore) {
    return "player_two";
  }
  return false;
};
