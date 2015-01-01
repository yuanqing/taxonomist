'use strict';

var test = require('tape');
var taxonomist = require('../');

var arr = [
  { fields: { tags: ['foo', 'bar'] } },
  { fields: { tags: ['baz'] } },
  { fields: { tags: 'bar' } }
];

test('empty `arr`', function(t) {

  t.looseEqual(taxonomist([]), {});
  t.looseEqual(taxonomist([], 'foo'), {});

  t.end();

});

test('invalid `prop`', function(t) {

  t.looseEqual(taxonomist(arr), {});

  t.looseEqual(taxonomist(arr, 'invalid'), {});
  t.looseEqual(taxonomist(arr, function(obj) {
    return obj.invalid;
  }), {});

  t.end();

});

test('string `prop`, no `fn`', function(t) {

  var result = taxonomist(arr, 'fields.tags');
  t.looseEqual(result, {
    foo: [ arr[0] ],
    bar: [ arr[0], arr[2] ],
    baz: [ arr[1] ],
  });
  t.equal(result.foo[0], arr[0]);
  t.equal(result.bar[0], arr[0]);
  t.equal(result.bar[1], arr[2]);
  t.equal(result.baz[0], arr[1]);

  t.end();

});

test('function `prop`, no `fn`', function(t) {

  var result = taxonomist(arr, function(obj) {
    return obj.fields.tags;
  });
  t.looseEqual(result, {
    foo: [ arr[0] ],
    bar: [ arr[0], arr[2] ],
    baz: [ arr[1] ],
  });
  t.equal(result.foo[0], arr[0]);
  t.equal(result.bar[0], arr[0]);
  t.equal(result.bar[1], arr[2]);
  t.equal(result.baz[0], arr[1]);

  t.end();

});

test('string `prop`, with `fn`', function(t) {

  var result = taxonomist(arr, 'fields.tags', function(tag) {
    return tag[0];
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

test('function `prop`, with `fn`', function(t) {

  var result = taxonomist(arr, function(item) {
    return item.fields.tags;
  }, function(tag) {
    return tag[0];
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
