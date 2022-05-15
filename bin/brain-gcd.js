#!/usr/bin/env node

import {
  greeting, declareRules, gcdCliTurn, congrats,
} from '../src/cli.js';
import gameState from '../src/gameState.js';

try {
  const name = greeting();
  declareRules('gcd');
  gameState(gcdCliTurn, name);
  congrats(name);
} catch (e) {
  console.error(e);
}
