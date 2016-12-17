import test from 'ava';
import m from './';

test(t => {
	t.deepEqual(m({foo: 'foo', bar: 'bar'}), ['foo', 'bar']);
});
