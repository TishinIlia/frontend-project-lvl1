#!/usr/bin/env node

import {
  greeting, declareRules, congrats, calcCliTurn,
} from '../src/cli.js';
import gameState from '../src/gameState.js';

try {
  const name = greeting();
  declareRules('calc');
  gameState(calcCliTurn, name);
  congrats(name);
} catch (e) {
  console.error(e);
}
