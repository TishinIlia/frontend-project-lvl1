import readlineSync from 'readline-sync';

export const getAnswer = (text) => readlineSync.question(text);

export const fail = (name) => {
  console.log(`Let's try again, ${name}!`);
};

export const congrats = (name) => {
  console.log(`Congratulations, ${name}!`);
};

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = getAnswer('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const RULE = {
  even: 'Answer "yes" if the number is even, otherwise answer "no".',
  calc: 'What is the result of the expression?',
  gcd: 'Find the greatest common divisor of given numbers.',
  progression: 'What number is missing in the progression?',
  prime: 'Answer "yes" if given number is prime. Otherwise answer "no".',
};

export const declareRules = (game) => {
  if (RULE[game]) {
    console.log(RULE[game]);
  }
  return new Error('Неверное имя игры');
};

export const cliTurn = (rightAnswerObject) => {
  const rightAnswerText = rightAnswerObject.rightAnswer;
  console.log(`Question: ${rightAnswerObject.inputCondition}`);
  const userAnswerText = getAnswer('Your answer: ');
  const result = userAnswerText === rightAnswerText;
  if (result) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswerText}' is wrong answer ;(. Correct answer was '${rightAnswerText}'.`);
  }
  return result;
};
