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
		console.log(obj);
	};

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = objectValues;
	} else {
		window.objectValues = objectValues;
	}
})();
