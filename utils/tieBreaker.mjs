import {
  settleStraightFlush,
  settleFourOfAKind,
  settleFullHouse,
  settleStraight,
  settleThreeOfAKind,
  settleTwoPairs,
  settlePair,
  settleHighCard,
} from "./settle-tie/index.mjs";

import {
  playerHandCardNumbers,
  playerHandCardSuits,
} from "./commonUtilities.mjs";

import { ALL_NUMBERS_IN_ORDER_OF_VALUE } from "../constants/combinations.mjs";

export const tieBreaker = (playerOneHand, playerTwoHand, rank) => {
  const arrayRef = ALL_NUMBERS_IN_ORDER_OF_VALUE;
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
      winner = settleStraightFlush(players, arrayRef);
      console.log(`"winner rank 9 + ${winner}`);
      break;
    case rank === 8:
      winner = settleFourOfAKind(players);
      console.log(`"winner rank 8 + ${winner}`);

      break;
    case rank === 7:
      winner = settleFullHouse(players);
      console.log(`"winner rank 7 + ${winner}`);

      break;
    case rank === 6:
      winner = false;
      //this is due to suits not being deciding tie breakers
      break;
    case rank === 5:
      winner = settleStraight(players);
      console.log(`"winner rank 5 + ${winner}`);

      break;
    case rank === 4:
      winner = settleThreeOfAKind(players);
      console.log(`"winner rank 4 + ${winner}`);

      break;
    case rank === 3:
      winner = settleTwoPairs(players);
      console.log(`"winner rank 3 + ${winner}`);

      break;
    case rank === 2:
      winner = settlePair(players);
      console.log(`"winner rank 2 + ${winner}`);

      break;
  }

  if (winner) {
    return winner;
  } else {
    winner = settleHighCard(players);

    console.log(`winner high card + ${winner}`);

    return winner;
  }
};
