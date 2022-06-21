import { generateNumber, gcd } from '../utils/utils.js';

const answerGCDGame = () => {
  const firstNumber = generateNumber(1, 100);
  const secondNumber = generateNumber(1, 100);
  const rightAnswer = String(gcd(firstNumber, secondNumber));
  return {
    inputCondition: `${firstNumber} ${secondNumber}`,
    rightAnswer,
  };
};

export const GCD_GAME_RULES = 'Find the greatest common divisor of given numbers.';

export default answerGCDGame;
