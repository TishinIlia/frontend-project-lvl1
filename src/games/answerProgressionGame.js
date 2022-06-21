import { generateGameProgression } from '../utils/utils.js';

const answerProgressionGame = () => {
  const progression = generateGameProgression();
  return {
    inputCondition: progression.sequence,
    rightAnswer: String(progression.answer),
  };
};

export const PROGRESSION_GAME_RULES = 'What number is missing in the progression?';

export default answerProgressionGame;
