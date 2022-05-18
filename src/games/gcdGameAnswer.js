import generateNumber from '../utils/generateNumber.js';
import gcd from '../utils/gcd.js';

const gcdAnswer = () => {
  const firstNumber = generateNumber(1, 100);
  const secondNumber = generateNumber(1, 100);
  const rightAnswer = String(gcd(firstNumber, secondNumber));
  return {
    inputCondition: `${firstNumber} ${secondNumber}`,
    rightAnswer,
  };
};

export default gcdAnswer;
