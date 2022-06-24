import { generateNumber, gcd } from '../utils/utils.js';

const answerGCDGame = () => {
  const firstNumber = generateNumber(1, 100);
  const secondNumber = generateNumber(1, 100);
  const answer = String(gcd(firstNumber, secondNumber));
  return {
    question: `${firstNumber} ${secondNumber}`,
    answer,
  };
};

export const GCD_GAME_RULES = 'Find the greatest common divisor of given numbers.';

export default answerGCDGame;
