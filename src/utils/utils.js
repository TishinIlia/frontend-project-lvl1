export const generateNumber = (min, max) => {
  const genMin = Math.ceil(min);
  const genMax = Math.floor(max);
  return Math.floor(Math.random() * (genMax - genMin) + genMin);
};

export const gcd = (first, second) => {
  let tempFirst = first;
  let tempSecond = second;
  if (tempSecond > tempFirst) { const temp = tempFirst; tempFirst = tempSecond; tempSecond = temp; }
  while (tempFirst && tempSecond) {
    const temp = tempSecond;
    tempSecond = tempFirst % tempSecond;
    tempFirst = temp;
  }
  return tempFirst;
};

export const generateProgression = () => {
  const start = generateNumber(1, 100);
  const step = generateNumber(1, 10);
  const length = generateNumber(5, 11);
  return Array.from({ length }, (_, i) => start + step * i);
};

export const createConditionsGameProgression = () => {
  const progression = generateProgression();
  const chosenElement = generateNumber(0, progression.length);
  const newSequence = [...progression.slice(0, chosenElement), '..', ...progression.slice(chosenElement + 1)];
  return {
    sequence: `${newSequence.join(' ')}`,
    answer: progression[chosenElement],
  };
};

export const sieveOfEratosfen = (number) => {
  const prime = Array.from({ length: number + 1 }, () => true);

  for (let p = 2; p * p <= number; p += 1) {
    // If prime[p] is not changed, then it is a prime
    if (prime[p] === true) {
      // Update all multiples of p
      for (let i = p * p; i <= number; i += p) prime[i] = false;
    }
  }
  return prime[number];
};
