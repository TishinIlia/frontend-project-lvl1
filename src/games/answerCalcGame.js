import { generateNumber } from '../utils/utils.js';

const answerCalcGame = () => {
  const operations = {
    '+': (first, second) => first + second,
    '-': (first, second) => first - second,
    '*': (first, second) => first * second,
  };
  const firstNumber = generateNumber(1, 100);
  const secondNumber = generateNumber(1, 100);
  const chooseOperation = generateNumber(0, 3);
  return {
    inputCondition: `${firstNumber} ${Object.keys(operations)[chooseOperation]} ${secondNumber}`,
    rightAnswer: String(Object.values(operations)[chooseOperation](firstNumber, secondNumber)),
  };
};

export const CALC_GAME_RULES = 'What is the result of the expression?';

export default answerCalcGame;
