/* globals describe, it, expect */
'use strict';

var taxonomist = require('..');

describe('taxonomist(arr, prop [, fn])', function() {

  var arr = [
    { fields: { tags: ['foo', 'bar'] } },
    { fields: { tags: ['baz'] } },
    { fields: { tags: 'bar' } }
  ];

  it('assigns objects in `arr` to categories based on the specified `prop`', function() {
    var result = taxonomist(arr, 'fields.tags');
    expect(result).toEqual({
      foo: [ arr[0] ],
      bar: [ arr[0], arr[2] ],
      baz: [ arr[1] ]
    });
    expect(result.foo[0]).toBe(arr[0]);
    expect(result.bar[0]).toBe(arr[0]);
    expect(result.bar[1]).toBe(arr[2]);
    expect(result.baz[0]).toBe(arr[1]);
  });

  it('with `fn` modifying the value to be used for the categorisation', function() {
    var result = taxonomist(arr, 'fields.tags', function(tag) {
      return tag[0]; // group by first letter of the `tag`
    });
    expect(result).toEqual({
      f: [ arr[0] ],
      b: [ arr[0], arr[1], arr[2] ]
    });
  });

});
