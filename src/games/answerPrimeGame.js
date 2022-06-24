import { generateNumber, sieveOfEratosfen } from '../utils/utils.js';

const answerPrimeGame = () => {
  const number = generateNumber(1, 100);
  const rightAnswer = sieveOfEratosfen(number);
  return {
    question: number,
    answer: rightAnswer ? 'yes' : 'no',
  };
};

export const PRIME_GAME_RULES = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default answerPrimeGame;
