import generateNumber from './generateNumber.js';

const generateProgression = () => {
  const start = generateNumber(1, 100);
  const step = generateNumber(1, 10);
  const length = generateNumber(5, 11);
  const sequence = Array.from({ length }, (_, i) => start + step * i);
  const chosenElement = generateNumber(0, length);
  const before = `${sequence.slice(0, chosenElement).join(' ')} `;
  const after = ` ${sequence.slice(chosenElement + 1).join(' ')}`;
  return {
    sequence: `${before || ''}..${after || ''}`,
    answer: sequence[chosenElement],
  };
};

export default generateProgression;
