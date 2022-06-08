import generateProgression from '../utils/generateProgression.js';

const answerProgressionGame = () => {
  const progression = generateProgression();
  return {
    inputCondition: progression.sequence,
    rightAnswer: String(progression.answer),
  };
};

export default answerProgressionGame;
