import { cliTurn } from './cli.js';

const NUMBER_OF_NEEDED_RIGHT_ANSWERS = 3;

const gameState = (rightAnswerFunc) => {
  let rightAnswers = 0;
  while (rightAnswers < NUMBER_OF_NEEDED_RIGHT_ANSWERS) {
    const rightAnswerObject = rightAnswerFunc();
    const isCorrect = cliTurn(rightAnswerObject);
    if (!isCorrect) {
      return false;
    }
    rightAnswers += 1;
  }
  return true;
};

export default gameState;
