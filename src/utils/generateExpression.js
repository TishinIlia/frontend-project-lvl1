import generateNumber from './generateNumber.js';

const generateExpression = () => {
  const operations = {
    '+': (first, second) => first + second,
    '-': (first, second) => first - second,
    '*': (first, second) => first * second,
  };
  const firstNumber = generateNumber(1, 100);
  const secondNumber = generateNumber(1, 100);
  const chooseOperation = generateNumber(0, 3);
  return {
    expression: `${firstNumber} ${Object.keys(operations)[chooseOperation]} ${secondNumber}`,
    answer: Object.values(operations)[chooseOperation](firstNumber, secondNumber),
  };
};

export default generateExpression;
