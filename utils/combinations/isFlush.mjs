import { suitMatch } from "../commonUtilities.mjs";

export const isFlush = (cardSuits) => {
  return suitMatch(cardSuits);
};
