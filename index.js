'use strict';
module.exports = objectValues;

function objectValues (obj, opts) {
	opts = opts || {}
	var keys = Object.keys(obj);
	var ret = [];

	for (var i = 0; i < keys.length; i++) {
		var val = obj[keys[i]]
		if (opts.recurse && val && typeof val === 'object' && Object.keys(val).length) {
			ret = ret.concat(objectValues(val, opts));
		} else {
			ret.push(val);
		}
	}

	return ret;
};
