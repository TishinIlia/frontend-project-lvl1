import readlineSync from 'readline-sync';

import generateNumber from './generateNumber.js';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  console.log('May I have your name?');
  const name = readlineSync.question('Your answer: ');

  console.log(`Hello, ${name}!`);
  return name;
};

const rules = {
  even: 'Answer "yes" if the number is even, otherwise answer "no".',
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
  console.log(`Question: ${number}`);
  const userAnswerText = readlineSync.question('Your answer: ');
  const result = rightAnswerText === userAnswerText;
  if (result) {
    console.log('Correct!');
  } else {
    console.log(`${userAnswerText} is wrong answer ;(. Correct answer was ${rightAnswerText}. Let's try again, ${name}!`);
  }
  return result;
};

export const congrats = (name) => {
  console.log(`Congratulations, ${name}!`);
};
