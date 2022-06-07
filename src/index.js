import readlineSync from 'readline-sync';

export const answerQuestion = (text) => console.log(`Question: ${text}`);

export const getAnswer = (text) => readlineSync.question(text);

export const getUserAnswer = () => readlineSync.question('Your answer: ');

export const compareAnswer = (userAnswer, rightAnswer) => userAnswer === rightAnswer;
