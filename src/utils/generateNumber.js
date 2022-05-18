const generateNumber = (min, max) => {
  const genMin = Math.ceil(min);
  const genMax = Math.floor(max);
  return Math.floor(Math.random() * (genMax - genMin) + genMin);
};

export default generateNumber;
