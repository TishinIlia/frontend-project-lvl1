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

export const declareRules = (gameRules) => {
  console.log(gameRules);
};

export const askQuestion = (questionText) => console.log(`Question: ${questionText}`);
export const sayAnswerRight = () => console.log('Correct!');
export const sayAnswerWrong = (userAnswerText, rightAnswerText) => console.log(`'${userAnswerText}' is wrong answer ;(. Correct answer was '${rightAnswerText}'.`);
