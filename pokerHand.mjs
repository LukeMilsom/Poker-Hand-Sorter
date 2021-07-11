import { ROYAL_NUMBERS } from "./constants/combinations.mjs";
import { combinationChecker, formatScore } from "./utils/index.mjs";

const newLine = "\n";

const lukeTest = `
TC AC JC QC KC 2S KD TH 9H 8H
`;

const dataSet = lukeTest.split(newLine);
const cleanData = dataSet.filter((item) => item !== "");

const calculateWinner = (playerOneHand, playerTwoHand) => {
  const playerOneScore = combinationChecker(playerOneHand);
  //const playerTwoScore = combinationChecker(playerTwoHand);

  //isTieBreaker(playerOneHand, playerTwoHand);

  //const winner = formatScore(playerOneScore, playerTwoScore);
};

cleanData.forEach((item) => {
  const cardsInAGame = item.split(" ");
  const playerOneHand = cardsInAGame.splice(0, 5);
  const playerTwoHand = cardsInAGame.splice(0, cardsInAGame.length);

  calculateWinner(playerOneHand, playerTwoHand);
});
