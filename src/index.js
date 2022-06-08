import {
  greeting, declareRules, congrats, fail,
} from './cli.js';
import gameState from './gameState.js';

import answerCalcGame from './games/answerCalcGame.js';
import answerEvenGame from './games/answerEvenGame.js';
import answerGCDGame from './games/answerGCDGame.js';
import answerPrimeGame from './games/answerPrimeGame.js';
import answerProgressionGame from './games/answerProgressionGame.js';

const GAME = {
  calc: answerCalcGame,
  even: answerEvenGame,
  gcd: answerGCDGame,
  prime: answerPrimeGame,
  progression: answerProgressionGame,
};

const launchGame = (game) => {
  try {
    const name = greeting();
    declareRules(game);
    const result = gameState(GAME[game]);
    if (result) {
      congrats(name);
      return;
    }
    fail(name);
  } catch (e) {
    console.error(e);
  }
};

export default launchGame;
