# Taxonomist.js [![npm Version](http://img.shields.io/npm/v/taxonomist.svg?style=flat)](https://www.npmjs.org/package/taxonomist) [![Build Status](https://img.shields.io/travis/yuanqing/taxonomist.svg?style=flat)](https://travis-ci.org/yuanqing/taxonomist) [![Coverage Status](https://img.shields.io/coveralls/yuanqing/taxonomist.svg?style=flat)](https://coveralls.io/r/yuanqing/taxonomist)

> Assign objects to categories based on an object property.

## API

### taxonomist(arr, prop)

```js
var arr = [
  { fields: { tags: ['foo', 'bar'] } },
  { fields: { tags: ['foo'] } },
  { fields: { tags: 'bar' } }
];

taxonomist(arr, 'fields.tags');
/* {
 *   foo: [ arr[0], arr[1] ],
 *   bar: [ arr[0], arr[2] ]
 * }
 */
```

If the category we want to group on is a &ldquo;nested&rdquo; property, use a dot-delimited string (eg. `fields.tags` above). (See [Jaunt.js](https://github.com/yuanqing/jaunt).)

- `arr` &mdash; An array of objects we want to assign to categories.
- `prop` &mdash; A string that corresponds to a value in each object in `arr`.

## Installation

Install via [npm](https://www.npmjs.org/):

```bash
$ npm i --save taxonomist
```

## Changelog

- 2.0.0
  - Drop support for returning indices
  - The value corresponding to `prop` in each object need not be an array
- 1.0.0
  - Initial release

## License

[MIT license](https://github.com/yuanqing/taxonomist/blob/master/LICENSE)
