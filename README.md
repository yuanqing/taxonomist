# Taxonomist.js [![npm Version](http://img.shields.io/npm/v/taxonomist.svg?style=flat)](https://www.npmjs.org/package/taxonomist) [![Build Status](https://img.shields.io/travis/yuanqing/taxonomist.svg?style=flat)](https://travis-ci.org/yuanqing/taxonomist) [![Coverage Status](https://img.shields.io/coveralls/yuanqing/taxonomist.svg?style=flat)](https://coveralls.io/r/yuanqing/taxonomist)

> Group objects into categories based on an object property.

## Usage

```js
var arr = [
  { fields: { tags: ['foo', 'bar'] } },
  { fields: { tags: ['baz'] } },
  { fields: { tags: 'bar' } }
];

// categorise by property
taxonomist(arr, function(obj, i) {
  return obj.fields.tags;
});
/* {
 *   foo: [ arr[0] ],
 *   bar: [ arr[0], arr[2] ],
 *   baz: [ arr[1] ]
 * }
 */

// modify the value used to perform the categorisation
taxonomist(arr, 'fields.tags', function(tag, i) {
  return tag[0]; // categorise according to the first letter of each `tag`
});
/* {
 *   f: [ arr[0] ],
 *   b: [ arr[0], arr[1], arr[2] ]
 * }
 */
```

## API

### taxonomist(arr, prop [, fn])

Categorise objects in `arr` based on the property specified by `prop`.

- `arr` &mdash; An array we want to categorise.
- `prop` &mdash; Either a dot-delimited string or a function.
  - If a dot-delimited string, it must correspond to the categories of each object in `arr`.
  - If a function, it will be passed each object in `arr`, in addition to that object&rsquo;s index. The function must return the categories of that particular object.
- `fn` &mdash; A function (optional; defaults to the identity function) for modifying the value used to perform the categorisation. It is passed each category of each object.

## Installation

Install via [npm](https://www.npmjs.org/):

```bash
$ npm i --save taxonomist
```

## Changelog

- 2.3.0
  - Allow `prop` to be a function
- 2.2.0
  - Migrate tests to [tape](https://github.com/substack/tape)
- 2.1.0
  - Add `fn` for modifying the value used for categorising the objects in `arr`
- 2.0.0
  - Drop support for returning indices in the result
  - The value corresponding to `prop` in each object need not be an array
- 1.0.0
  - Initial release

## License

[MIT license](https://github.com/yuanqing/taxonomist/blob/master/LICENSE)
