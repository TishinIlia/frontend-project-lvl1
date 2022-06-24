import readlineSync from 'readline-sync';

import answerCalcGame, { CALC_GAME_RULES } from './games/answerCalcGame.js';
import answerEvenGame, { EVEN_GAME_RULES } from './games/answerEvenGame.js';
import answerGCDGame, { GCD_GAME_RULES } from './games/answerGCDGame.js';
import answerPrimeGame, { PRIME_GAME_RULES } from './games/answerPrimeGame.js';
import answerProgressionGame, { PROGRESSION_GAME_RULES } from './games/answerProgressionGame.js';

const GAME_DATA = {
  calc: {
    getGameData: answerCalcGame,
    rules: CALC_GAME_RULES,
  },
  even: {
    getGameData: answerEvenGame,
    rules: EVEN_GAME_RULES,
  },
  gcd: {
    getGameData: answerGCDGame,
    rules: GCD_GAME_RULES,
  },
  prime: {
    getGameData: answerPrimeGame,
    rules: PRIME_GAME_RULES,
  },
  progression: {
    getGameData: answerProgressionGame,
    rules: PROGRESSION_GAME_RULES,
  },
};

const launchGame = (game) => {
  const countRounds = 3;
  const { rules, getGameData } = GAME_DATA[game];
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(rules);
  for (let i = 0; i < countRounds; i += 1) {
    const { question, answer } = getGameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default launchGame;
