/*!
	object-values
	Get the values of an object
	https://github.com/sindresorhus/object-values
	by Sindre Sorhus
	MIT License
*/
(function () {
	'use strict';

	var objectValues = function (obj) {
		var keys = Object.keys(obj);
		var ret = [];

		for (var i = 0; i < keys.length; i++) {
			ret.push(obj[keys[i]]);
		}

		return ret;
	};

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = objectValues;
	} else {
		window.objectValues = objectValues;
	}
})();
