import { combinations } from "./constants/combinations.mjs";
import { checkForCombination } from "./utilities/checkForCombination.mjs";

const newLine = "\n";

const lukeTest = `
9C 9D 8D 7C 3C 2S KD TH 9H 8H
6C 5H AS 4H 7S 2S KD 7H 2C AC
5H JS AD 8H TC KS QC 9C 5D 6H
6C 8S 3S TS 4S AH 6S KS 8D 5D
AS TC 8C 3H 3C AD 5H 8D 5C 2H
3S AC AH AS 5H 7S QC 8S TC 4C
TH 6D 7H 5S 8S QS TD 3S 6C 9H
8C JH KD 3S 4D 2S 2C 8S JS 4H
JS 9S 6S JD 5H 9D KS 8H 5S 4D
JC TC KC 3C 3D 2H 7S 5H QH 4D
7D 5H 4H TC 3S 5S KC 6H 6C QS
AC 2D 7D 3C TC 3S JS 4H 4D JD
7S 8S AC KD AH 5D TC 6D 7H 3S
JS 5D QC 5H 5S 2S 8C JC KC KH
2D 3H TC 8C QS 6C KS 2S AD 4C
QS 7H 4H AH JS 3H JH AD 8D 3C`;

const dataSet = lukeTest.split(newLine);
const cleanData = dataSet.filter((item) => item !== "");

const calculateWinner = (playerOne, playerTwo) => {
  let playerOneScore;
  let playerTwoScore;

  combinations.forEach((item) => {
    if (playerOne.includes(item.combination)) {
      playerOneScore = item.rank;
    }
    if (playerTwo.includes(item.combination)) {
      playerTwoScore = item.rank;
    }
  });

  console.log(
    `Player One Score: ${playerOneScore}, Player Two Score: ${playerTwoScore}`
  );
};

cleanData.forEach((item) => {
  const cardsInAGame = item.split(" ");
  const playerOne = cardsInAGame.splice(0, 5);
  const playerTwo = cardsInAGame.splice(0, cardsInAGame.length);

  calculateWinner("123", "789");
});
