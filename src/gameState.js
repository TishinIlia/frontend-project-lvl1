import {
  askQuestion, getAnswer, sayAnswerRight, sayAnswerWrong,
} from './cli.js';

const NUMBER_OF_NEEDED_RIGHT_ANSWERS = 3;

const gameTurn = (rightAnswerObject) => {
  const rightAnswerText = rightAnswerObject.rightAnswer;
  askQuestion();
  const userAnswerText = getAnswer('Your answer: ');
  const result = userAnswerText === rightAnswerText;
  if (result) {
    sayAnswerRight();
  } else {
    sayAnswerWrong(userAnswerText, rightAnswerText);
  }
  return result;
};

const gameState = (rightAnswerFunc) => {
  let rightAnswers = 0;
  while (rightAnswers < NUMBER_OF_NEEDED_RIGHT_ANSWERS) {
    const rightAnswerObject = rightAnswerFunc();
    const isCorrect = gameTurn(rightAnswerObject);
    if (!isCorrect) {
      return false;
    }
    rightAnswers += 1;
  }
  return true;
};

export default gameState;
