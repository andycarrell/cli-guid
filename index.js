const { compose, parse, repeat } = require('./helpers');
const { makeGuid } = require('./guid');

exports.makeGuids = compose(repeat(makeGuid), parse);
