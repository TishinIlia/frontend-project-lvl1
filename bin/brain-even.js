#!/usr/bin/env node

import {
  greeting, declareRules, evenCliTurn, congrats,
} from '../src/cli.js';
import gameState from '../src/gameState.js';

try {
  const name = greeting();
  declareRules('even');
  gameState(evenCliTurn, name);
  congrats(name);
} catch (e) {
  console.error(e);
}
