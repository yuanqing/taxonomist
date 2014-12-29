# Taxonomist.js [![npm Version](http://img.shields.io/npm/v/taxonomist.svg?style=flat)](https://www.npmjs.org/package/taxonomist) [![Build Status](https://img.shields.io/travis/yuanqing/taxonomist.svg?style=flat)](https://travis-ci.org/yuanqing/taxonomist) [![Coverage Status](https://img.shields.io/coveralls/yuanqing/taxonomist.svg?style=flat)](https://coveralls.io/r/yuanqing/taxonomist)

> Assign objects to categories based on an object property.

## API

### taxonomist(arr, prop [, fn])

```js
var arr = [
  { fields: { tags: ['foo', 'bar'] } },
  { fields: { tags: ['baz'] } },
  { fields: { tags: 'bar' } }
];

// categorise by a particular property
taxonomist(arr, 'fields.tags');
/* {
 *   foo: [ arr[0] ],
 *   bar: [ arr[0], arr[2] ],
 *   baz: [ arr[1] ]
 * }
 */

// modify the value used for categorising objects in `arr`
taxonomist(arr, 'fields.tags', function(tag) {
  return tag[0]; // group by first letter of the `tag`
});
/* {
 *   f: [ arr[0] ],
 *   b: [ arr[0], arr[1], arr[2] ]
 * }
 */
```

If the category is a &ldquo;nested&rdquo; property, use a dot-delimited string (eg. `fields.tags` above). (See [Jaunt.js](https://github.com/yuanqing/jaunt).)

Optionally pass in a third `fn` argument to modify the value used for categorising. `fn` will be passed every value in the array that corresponds to `prop` for every object in `arr`.

## Installation

Install via [npm](https://www.npmjs.org/):

```bash
$ npm i --save taxonomist
```

## Changelog

- 2.1.0
  - Add `fn` for modifying the value used for categorising the objects in `arr`
- 2.0.0
  - Drop support for returning indices in the result
  - The value corresponding to `prop` in each object need not be an array
- 1.0.0
  - Initial release

## License

[MIT license](https://github.com/yuanqing/taxonomist/blob/master/LICENSE)
