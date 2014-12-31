'use strict';

var test = require('tape');
var taxonomist = require('../');

var arr = [
  { fields: { tags: ['foo', 'bar'] } },
  { fields: { tags: ['baz'] } },
  { fields: { tags: 'bar' } }
];

test('assigns objects in `arr` to categories based on the specified `prop`', function(t) {

  var result = taxonomist(arr, 'fields.tags');

  t.looseEqual(result, {
    foo: [ arr[0] ],
    bar: [ arr[0], arr[2] ],
    baz: [ arr[1] ]
  });
  t.equal(result.foo[0], arr[0]);
  t.equal(result.bar[0], arr[0]);
  t.equal(result.bar[1], arr[2]);
  t.equal(result.baz[0], arr[1]);

  t.end();

});

test('with `fn` modifying the value to be used for the categorisation', function(t) {

  var result = taxonomist(arr, 'fields.tags', function(tag) {
    return tag[0]; // group by first letter of the `tag`
  });

  t.looseEqual(result, {
    f: [ arr[0] ],
    b: [ arr[0], arr[1], arr[2] ]
  });
  t.equal(result.f[0], arr[0]);
  t.equal(result.b[0], arr[0]);
  t.equal(result.b[1], arr[1]);
  t.equal(result.b[2], arr[2]);

  t.end();

});
