import {
  greeting, declareRules, congrats, fail,
} from './cli.js';
import gameState from './gameState.js';

import answerCalcGame, { CALC_GAME_RULES } from './games/answerCalcGame.js';
import answerEvenGame, { EVEN_GAME_RULES } from './games/answerEvenGame.js';
import answerGCDGame, { GCD_GAME_RULES } from './games/answerGCDGame.js';
import answerPrimeGame, { PRIME_GAME_RULES } from './games/answerPrimeGame.js';
import answerProgressionGame, { PROGRESSION_GAME_RULES } from './games/answerProgressionGame.js';

const GAME_DATA = {
  calc: {
    rightAnswerFunc: answerCalcGame,
    rules: CALC_GAME_RULES,
  },
  even: {
    rightAnswerFunc: answerEvenGame,
    rules: EVEN_GAME_RULES,
  },
  gcd: {
    rightAnswerFunc: answerGCDGame,
    rules: GCD_GAME_RULES,
  },
  prime: {
    rightAnswerFunc: answerPrimeGame,
    rules: PRIME_GAME_RULES,
  },
  progression: {
    rightAnswerFunc: answerProgressionGame,
    rules: PROGRESSION_GAME_RULES,
  },
};

const launchGame = (game) => {
  const name = greeting();
  const result = gameState(GAME_DATA[game].rightAnswerFunc);
  declareRules(GAME_DATA[game].rules);
  if (result) {
    congrats(name);
    return;
  }
  fail(name);
};

export default launchGame;
