import readlineSync from 'readline-sync';

export const answerQuestion = (text) => console.log(`Question: ${text}`);

export const getAnswer = () => readlineSync.question('Your answer: ');

export const compareAnswer = (userAnswer, rightAnswer) => userAnswer === rightAnswer;
