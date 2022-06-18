import { generateNumber, sieveOfEratosfen } from '../utils/utils.js';

const answerPrimeGame = () => {
  const number = generateNumber(1, 100);
  const rightAnswer = sieveOfEratosfen(number);
  return {
    inputCondition: number,
    rightAnswer: rightAnswer ? 'yes' : 'no',
  };
};

export default answerPrimeGame;
