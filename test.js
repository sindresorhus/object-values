'use strict';
var assert = require('assert');
var values = require('./');

it('should get the values of an object', function () {
	assert.deepEqual(values({foo: 'foo', bar: 'bar'}), ['foo', 'bar']);
});
