const { compose, parse, toUpper, repeat } = require('./helpers');
const { makeGuid } = require('./guid');

const makeCapitalGuid = compose(toUpper, makeGuid);

exports.makeCapitalizedGuids = compose(repeat(makeCapitalGuid), parse);
exports.makeGuids = compose(repeat(makeGuid), parse);
