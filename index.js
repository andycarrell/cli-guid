const uuid = require('uuid/v4');

const { compose, log, parse, repeat } = require('./helpers');

const logId = compose(log, uuid);

exports.printIds = compose(repeat(logId), parse);

