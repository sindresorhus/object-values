'use strict';
var assert = require('assert');
var values = require('./');
var nestedObject = {
	a: 'foo',
	b: {
		c: 'bar',
		d: {
			x: 1,
			y: 2
		}
	}
};

it('should get the values of an object', function () {
	assert.deepEqual(values({foo: 'foo', bar: 'bar'}), ['foo', 'bar']);
});

it('does not recurse nested objects by default', function () {
	assert.deepEqual(values(nestedObject), [
		'foo',
		{c: 'bar', d: {x: 1, y: 2}}
	]);
});

it('recurses nested objects if `recurse` option is truthy', function () {
	assert.deepEqual(values(nestedObject, {recurse: true}), ['foo', 'bar', 1, 2]);
});
