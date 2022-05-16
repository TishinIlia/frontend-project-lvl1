import generateNumber from './generateNumber.js';
import { answerQuestion, compareAnswer, getAnswer } from './index.js';
import generateExpression from './generateExpression.js';
import gcd from './gcd.js';
import generateProgression from './generateProgression.js';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  console.log('May I have your name?');
  const name = getAnswer();

  console.log(`Hello, ${name}!`);
  return name;
};

const rules = {
  even: 'Answer "yes" if the number is even, otherwise answer "no".',
  calc: 'What is the result of the expression?',
  gcd: 'Find the greatest common divisor of given numbers.',
  progression: 'What number is missing in the progression?',
};

export const declareRules = (game) => {
  if (rules[game]) {
    console.log(rules[game]);
  }
  return new Error('Неверное имя игры');
};

export const evenCliTurn = (name) => {
  const number = generateNumber(1, 100);
  const rightAnswer = number % 2 === 0;
  const rightAnswerText = rightAnswer ? 'yes' : 'no';
  answerQuestion(number);
  const userAnswerText = getAnswer();
  const result = compareAnswer(userAnswerText, rightAnswerText);
  if (result) {
    console.log('Correct!');
  } else {
    console.log(`${userAnswerText} is wrong answer ;(. Correct answer was ${rightAnswerText}. Let's try again, ${name}!`);
  }
  return result;
};

export const calcCliTurn = (name) => {
  const expressionObject = generateExpression();
  const rightAnswer = expressionObject.answer;
  answerQuestion(expressionObject.expression);
  const userAnswer = Number(getAnswer());
  const result = compareAnswer(userAnswer, rightAnswer);
  if (result) {
    console.log('Correct!');
  } else {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}. Let's try again, ${name}!`);
  }
  return result;
};

export const gcdCliTurn = (name) => {
  const firstNumber = generateNumber(1, 100);
  const secondNumber = generateNumber(1, 100);
  const rightAnswer = gcd(firstNumber, secondNumber);
  answerQuestion(`${firstNumber}, ${secondNumber}`);
  const userAnswer = Number(getAnswer());
  const result = compareAnswer(userAnswer, rightAnswer);
  if (result) {
    console.log('Correct!');
  } else {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}. Let's try again, ${name}!`);
  }
  return result;
};

export const progressionCliTurn = (name) => {
  const progression = generateProgression();
  answerQuestion(`${progression.sequence}`);
  const userAnswer = Number(getAnswer());
  const result = compareAnswer(userAnswer, progression.answer);
  if (result) {
    console.log('Correct!');
  } else {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${progression.answer}. Let's try again, ${name}!`);
  }
  return result;
};

export const congrats = (name) => {
  console.log(`Congratulations, ${name}!`);
};
