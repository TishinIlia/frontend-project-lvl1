import { generateProgression } from '../utils/utils.js';

const answerProgressionGame = () => {
  const progression = generateProgression();
  return {
    inputCondition: progression.sequence,
    rightAnswer: String(progression.answer),
  };
};

export const PROGRESSION_GAME_RULES = 'What number is missing in the progression?';

export default answerProgressionGame;
