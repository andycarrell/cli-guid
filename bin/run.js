#!/usr/bin/env node

const { makeGuids } = require('../index');

const [,, arg] = process.argv;

makeGuids(arg).forEach(id => console.log(id));
