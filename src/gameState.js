const gameState = (func, arg) => {
  let rightAnswers = 0;
  while (rightAnswers < 3) {
    const isCorrect = func(arg);
    if (isCorrect) {
      rightAnswers += 1;
    } else {
      rightAnswers = 0;
    }
  }
};

export default gameState;
