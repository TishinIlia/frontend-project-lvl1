import {
  greeting, declareRules, congrats, fail,
} from './cli.js';
import gameState from './gameState.js';

import calcAnswer from './games/calcGameAnswer.js';
import evenAnswer from './games/evenGameAnswer.js';
import gcdAnswer from './games/gcdGameAnswer.js';
import primeAnswer from './games/primeGameAnswer.js';
import progressionAnswer from './games/progressionGameAnswer.js';

const GAMES = {
  calc: calcAnswer,
  even: evenAnswer,
  gcd: gcdAnswer,
  prime: primeAnswer,
  progression: progressionAnswer,
};

const gameLauncher = (game) => {
  try {
    const name = greeting();
    declareRules(game);
    const result = gameState(GAMES[game]);
    if (result) {
      congrats(name);
      return;
    }
    fail(name);
  } catch (e) {
    console.error(e);
  }
};

export default gameLauncher;
