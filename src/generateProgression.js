import generateNumber from './generateNumber.js';

const generateProgression = () => {
  const start = generateNumber(1, 100);
  const step = generateNumber(1, 10);
  const length = 10;
  const sequence = Array.from({ length }, (_, i) => start + step * i);
  const chosenElement = generateNumber(0, 10);
  return {
    sequence: `${sequence.slice(0, chosenElement).join(' ')} ... ${sequence.slice(chosenElement + 1).join(' ')}`,
    answer: sequence[chosenElement],
  };
};

export default generateProgression;
