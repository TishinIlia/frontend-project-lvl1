import generateNumber from '../utils/generateNumber.js';
import sieveOfEratosfen from '../utils/sieveOfEratosfen.js';

const primeAnswer = () => {
  const number = generateNumber(1, 100);
  const rightAnswer = sieveOfEratosfen(number);
  return {
    inputCondition: number,
    rightAnswer: rightAnswer ? 'yes' : 'no',
  };
};

export default primeAnswer;
