const compose = (...fns) => x => [...fns].reverse().reduce((acc, fn) => fn(acc), x);

const repeat = fn => n => [...Array(n)].map(fn);

const orOne = x => x || 1;
const round = x => Math.round(x);
const toNumber =  x => {
	const n = Number(x);
	return n === n ? n : 0;
}

exports.compose = compose;
exports.repeat = repeat;
exports.parse = compose(orOne, round, toNumber);
