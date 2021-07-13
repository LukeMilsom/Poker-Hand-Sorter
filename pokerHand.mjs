import { combinationChecker, formatScore, tieBreaker } from "./utils/index.mjs";
import fs from "fs";

const newLineRegex = "\n";

let gameData = fs.readFileSync("./poker-hands.txt").toString();

const dataSet = gameData.split(newLineRegex);
const cleanData = dataSet.filter((item) => item !== "");

let playerOneWins = 0;
let playerTwoWins = 0;

const calculateWinner = (playerOneHand, playerTwoHand) => {
  const playerOneScore = combinationChecker(playerOneHand);
  const playerTwoScore = combinationChecker(playerTwoHand);

  if (playerOneScore > playerTwoScore) {
    playerOneWins++;
  }
  if (playerTwoScore > playerOneScore) {
    playerTwoWins++;
  }

  if (playerOneScore === playerTwoScore) {
    let winner = tieBreaker(playerOneHand, playerTwoHand, playerOneScore);

    if (winner == "player_one") {
      playerOneWins++;
    }
    if (winner === "player_two") {
      playerTwoWins++;
    }
  }
};

cleanData.forEach((item) => {
  const cardsInAGame = item.split(" ");
  const playerOneHand = cardsInAGame.splice(0, 5);
  const playerTwoHand = cardsInAGame.splice(0, cardsInAGame.length);

  calculateWinner(playerOneHand, playerTwoHand);
});

fs.writeFileSync(
  "./gameResults/game-result.txt",
  `Player 1: ${playerOneWins} hands ${newLineRegex}Player 2: ${playerTwoWins} hands`
);

console.log(
  `Player 1: ${playerOneWins} hands ${newLineRegex}Player 2: ${playerTwoWins} hands`
);

//refactor the suit/number array breaker
