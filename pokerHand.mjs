import { combinationChecker, formatScore, tieBreaker } from "./utils/index.mjs";

const newLine = "\n";

const lukeTest = `
2H 9S 9C JD KH 2H 9S 9C JD KH
`;

const dataSet = lukeTest.split(newLine);
const cleanData = dataSet.filter((item) => item !== "");

let playerOne = 0;
let playerTwo = 0;
let tie = 0;

const calculateWinner = (playerOneHand, playerTwoHand) => {
  const playerOneScore = combinationChecker(playerOneHand);
  const playerTwoScore = combinationChecker(playerTwoHand);

  if (playerOneScore > playerTwoScore) {
    playerOne++;
  }
  if (playerTwoScore > playerOneScore) {
    playerTwo++;
  }

  if (playerOneScore === playerTwoScore) {
    let winner = tieBreaker(playerOneHand, playerTwoHand);
  }

  console.log(
    `Player one score: ${playerOneScore} | Player two score: ${playerTwoScore}`
  );
};

cleanData.forEach((item) => {
  const cardsInAGame = item.split(" ");
  const playerOneHand = cardsInAGame.splice(0, 5);
  const playerTwoHand = cardsInAGame.splice(0, cardsInAGame.length);

  calculateWinner(playerOneHand, playerTwoHand);
});

console.log({ playerOne });
console.log({ playerTwo });
console.log({ tie });

//const winner = formatScore(playerOneScore, playerTwoScore);
