#!/usr/bin/env node

const { printIds } = require('../index');

const [,, arg] = process.argv;

printIds(arg);