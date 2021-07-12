import { combinationChecker, formatScore } from "./utils/index.mjs";

const newLine = "\n";

const lukeTest = `
TD QD JD KD AD 2H 4D 5H 6H QH
`;

const dataSet = lukeTest.split(newLine);
const cleanData = dataSet.filter((item) => item !== "");

const calculateWinner = (playerOneHand, playerTwoHand) => {
  const playerOneScore = combinationChecker(playerOneHand);
  const playerTwoScore = combinationChecker(playerTwoHand);

  console.log({ playerOneScore });
  console.log({ playerTwoScore });

  //isTieBreaker(playerOneHand, playerTwoHand);

  //const winner = formatScore(playerOneScore, playerTwoScore);
};

cleanData.forEach((item) => {
  const cardsInAGame = item.split(" ");
  const playerOneHand = cardsInAGame.splice(0, 5);
  const playerTwoHand = cardsInAGame.splice(0, cardsInAGame.length);

  calculateWinner(playerOneHand, playerTwoHand);
});
