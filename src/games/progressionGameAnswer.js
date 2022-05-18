import generateProgression from '../utils/generateProgression.js';

const progressionAnswer = () => {
  const progression = generateProgression();
  return {
    inputCondition: progression.sequence,
    rightAnswer: String(progression.answer),
  };
};

export default progressionAnswer;
