import test from 'ava';
import m from '.';

test('main', t => {
	t.deepEqual(m({foo: 'foo', bar: 'bar'}), ['foo', 'bar']);
});
