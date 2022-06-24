import readlineSync from 'readline-sync';

export const getAnswer = (text) => readlineSync.question(text);

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = getAnswer('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};
