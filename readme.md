# object-values [![Build Status](https://travis-ci.org/sindresorhus/object-values.svg?branch=master)](https://travis-ci.org/sindresorhus/object-values)

> Get the values of an object

Returns an array of own enumerable property values of an object.

If you target Node.js 8 or higher, just use [`Object.values()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Object/values) instead.


## Install

```
$ npm install object-values
```


## Usage

```js
const objectValues = require('object-values');

objectValues({foo: 0, bar: 1});
//=> [0, 1]
```


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
