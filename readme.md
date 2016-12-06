# object-values [![Build Status](https://travis-ci.org/sindresorhus/object-values.svg?branch=master)](https://travis-ci.org/sindresorhus/object-values)

> Get the values of an object

Returns an array of own enumerable property values of an object.


## Install

```sh
$ npm install --save object-values
```


## Usage

```js
const objectValues = require('object-values');

objectValues({foo: 0, bar: 1});
//=> [0, 1]
```

You can also get values recursively from nested objects
using the `recurse` option:

```js
var nestedObj = {
  a: 'foo',
  b: {x: 1, y: 2}
}

objectValues(nestedObj, {recurse: true});
//=> ['foo', 1, 2]
```

## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
