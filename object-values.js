/*!
	object-values
	Get the values of an object
	https://github.com/sindresorhus/object-assign
	by Sindre Sorhus
	MIT License
*/
(function () {
	'use strict';

	var objectValues = function (obj) {
		return Object.keys(obj).map(function(key) {return obj[key];});
	};

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = objectValues;
	} else {
		window.objectValues = objectValues;
	}
})();
