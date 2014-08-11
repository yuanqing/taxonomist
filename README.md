# Taxonomist.js [![npm Version](http://img.shields.io/npm/v/taxonomist.svg?style=flat)](https://www.npmjs.org/package/taxonomist) [![Build Status](https://img.shields.io/travis/yuanqing/taxonomist.svg?style=flat)](https://travis-ci.org/yuanqing/taxonomist) [![Coverage Status](https://img.shields.io/coveralls/yuanqing/taxonomist.svg?style=flat)](https://coveralls.io/r/yuanqing/taxonomist)

> Assign objects to categories based on an object property.

```js
var arr = [
  { tags: ['foo', 'bar'] },
  { tags: ['foo'] },
  { tags: ['bar'] }
];

taxonomist(arr, 'tags');
/* =>
 * {
 *   foo: [
 *     { tags: ['foo', 'bar'] },
 *     { tags: ['foo'] }
 *   ],
 *   bar: [
 *     { tags: ['foo', 'bar'] },
 *     { tags: ['bar'] }
 *   ]
 * }
 */

taxonomist(arr, 'tags', true); // return object indices
/* =>
 * {
 *   foo: [0, 1],
 *   bar: [0, 2]
 * }
 */
```

## API

### taxonomist(arr, prop, [indices])

Assigns objects in `arr` to categories based on the `prop` property. The `prop` property of every object in `arr` must be an array. An object may be assigned to multiple categories.

- `arr` is an `array` of objects.

- `prop` is a dot-delimited `string` of keys, or an `array` of keys. This is useful when the property we are grouping on is nested in the object. (See [Jaunt.js](https://github.com/yuanqing/jaunt).)

- Set `indices` to `true` to return the objects indices (instead of copying the objects into the result).

## Installation

Install via [npm](https://www.npmjs.org/package/taxonomist):

```bash
$ npm i --save taxonomist
```

## License

[MIT license](https://github.com/yuanqing/taxonomist/blob/master/LICENSE)
