import generateNumber from '../utils/generateNumber.js';

const evenAnswer = () => {
  const number = generateNumber(1, 100);
  const rightAnswer = number % 2 === 0;
  return {
    inputCondition: number,
    rightAnswer: rightAnswer ? 'yes' : 'no',
  };
};

export default evenAnswer;
