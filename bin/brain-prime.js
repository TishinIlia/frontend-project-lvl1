#!/usr/bin/env node

import {
  greeting, declareRules, primeCliTurn, congrats,
} from '../src/cli.js';
import gameState from '../src/gameState.js';

try {
  const name = greeting();
  declareRules('prime');
  gameState(primeCliTurn, name);
  congrats(name);
} catch (e) {
  console.error(e);
}
