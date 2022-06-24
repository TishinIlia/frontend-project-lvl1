import { createConditionsGameProgression } from '../utils/utils.js';

const answerProgressionGame = () => {
  const progression = createConditionsGameProgression();
  return {
    question: progression.sequence,
    answer: String(progression.answer),
  };
};

export const PROGRESSION_GAME_RULES = 'What number is missing in the progression?';

export default answerProgressionGame;
