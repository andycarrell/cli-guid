#!/usr/bin/env node

const { makeGuids, makeCapitalizedGuids } = require('../index');

const [,, arg] = process.argv;

const f = process.argv.some(arg => arg === '-c' || arg === '-capitalize' || arg === '-capitalise')
    ? makeCapitalizedGuids
    : makeGuids;

f(arg).forEach(id => console.log(id));
