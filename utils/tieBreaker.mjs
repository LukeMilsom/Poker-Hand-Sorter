import {
  settleStraightFlush,
  settleFourOfAKind,
  settleFullHouse,
  settleFlush,
  settleStraight,
  settleThreeOfAKind,
  settleTwoPairs,
  settlePair,
} from "./settle-tie/index.mjs";

import {
  playerHandCardNumbers,
  playerHandCardSuits,
} from "./commonUtilities.mjs";

export const tieBreaker = (playerOneHand, playerTwoHand, rank) => {
  let winner;

  const players = {
    playerOne: {
      numbers: playerHandCardNumbers(playerOneHand),
      suits: playerHandCardSuits(playerOneHand),
    },
    playerTwo: {
      numbers: playerHandCardNumbers(playerTwoHand),
      suits: playerHandCardSuits(playerTwoHand),
    },
  };

  switch (true) {
    case rank === 10:
      winner = false;
      //this is due to suits not being deciding tie breakers
      break;
    case rank === 9:
      winner = settleStraightFlush(players);
      break;
    case rank === 8:
      winner = settleFourOfAKind(players);
      break;
    case rank === 7:
      winner = settleFullHouse(players);
      break;
    case rank === 6:
      winner = settleFlush(players);
      break;
    case rank === 5:
      winner = settleStraight(players);
      break;
    case rank === 4:
      winner = settleThreeOfAKind(players);
      break;
    case rank === 3:
      winner = settleTwoPairs(players);
      break;
    case rank === 2:
      winner = settlePair(players);
      break;
  }

  if (winner) {
    return winner;
  } else {
    //return settleHighCard(players);
    console.log(":(");
  }
};
