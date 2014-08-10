# Taxonomist.js [![Build Status](https://img.shields.io/travis/yuanqing/taxonomist.svg?style=flat)](https://travis-ci.org/yuanqing/taxonomist) [![Coverage Status](https://img.shields.io/coveralls/yuanqing/taxonomist.svg?style=flat)](https://coveralls.io/r/yuanqing/taxonomist)

> Assign objects to categories based on an object property.

## Usage

Given an array of objects:

```js
var arr = [
  { tags: [ 'foo', 'bar' ] },
  { tags: [ 'foo' ] },
  { tags: [ 'bar' ] }
];
```

&hellip;we can categorise the objects based on their `tags` property:

```js
taxonomist(arr, 'tags');
/* =>
 * {
 *   foo: [ { tags: [ 'foo', 'bar' ] }, { tags: [ 'foo' ] } ],
 *   bar: [ { tags: [ 'foo', 'bar' ] }, { tags: [ 'bar' ] } ]
 * }
 */
```

An object may be assigned to multiple categories.

## API

### taxonomist(arr, prop, [indices])

Set `indices` to `true` to return the objects indices (instead of copying the objects into the result):

```js
taxonomist(arr, 'tags', true);
/* =>
 * {
 *   foo: [ 0, 1 ],
 *   bar: [ 0, 2 ]
 * }
 */
```

## Installation

Install via [npm](https://www.npmjs.org/package/taxonomist):

```bash
$ npm i --save taxonomist
```

Or [grab the minified script](https://github.com/yuanqing/taxonomist/raw/master/dist/taxonomist.min.js) from the [`dist`](https://github.com/yuanqing/taxonomist/tree/master/dist) directory.

## License

[MIT license](https://github.com/yuanqing/taxonomist/blob/master/LICENSE)