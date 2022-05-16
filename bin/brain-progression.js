#!/usr/bin/env node

import {
  greeting, declareRules, progressionCliTurn, congrats,
} from '../src/cli.js';
import gameState from '../src/gameState.js';

try {
  const name = greeting();
  declareRules('progression');
  gameState(progressionCliTurn, name);
  congrats(name);
} catch (e) {
  console.error(e);
}
