#!/usr/bin/env node

import {
  greeting, declareRules, evenCliTurn, congrats,
} from '../src/cli.js';

try {
  const name = greeting();
  let rightAnswers = 0;
  declareRules('even');
  while (rightAnswers < 3) {
    const isCorrect = evenCliTurn(name);
    if (isCorrect) {
      rightAnswers += 1;
    } else {
      rightAnswers = 0;
    }
  }
  congrats(name);
} catch (e) {
  console.error(e);
}
