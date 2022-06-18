import { generateProgression } from '../utils/utils.js';

const answerProgressionGame = () => {
  const progression = generateProgression();
  return {
    inputCondition: progression.sequence,
    rightAnswer: String(progression.answer),
  };
};

export default answerProgressionGame;
