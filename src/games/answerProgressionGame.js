import { generateGameProgression } from '../utils/utils.js';

const answerProgressionGame = () => {
  const progression = generateGameProgression();
  return {
    question: progression.sequence,
    answer: String(progression.answer),
  };
};

export const PROGRESSION_GAME_RULES = 'What number is missing in the progression?';

export default answerProgressionGame;
