import { generateNumber } from '../utils/utils.js';

const answerEvenGame = () => {
  const number = generateNumber(1, 100);
  const rightAnswer = number % 2 === 0;
  return {
    inputCondition: number,
    rightAnswer: rightAnswer ? 'yes' : 'no',
  };
};

export const EVEN_GAME_RULES = 'Answer "yes" if the number is even, otherwise answer "no".';

export default answerEvenGame;
